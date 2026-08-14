# Extrae el logo original de TERRASOL S.A. del sitio anterior y genera dos PNG
# con fondo transparente: uno para header claro y otro para header oscuro.
#
# El original es texto gris con sombra en relieve sobre una placa gris clara,
# mas el isotipo (cuadro verde con interior blanco). Se tratan por separado:
#
#   - Isotipo  -> se deja OPACO tal cual el original (verde + interior blanco),
#                 asi se ve igual sobre cualquier fondo y no se rompen los
#                 bordes antialiasados del cuadro.
#   - Texto    -> alfa por luminancia con corte en 160. Segun el histograma del
#                 original el texto vive en ~90 y la sombra en relieve en
#                 170-220: cortando en 160 la sombra desaparece entera en vez
#                 de sobrevivir como fantasma gris.

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$src = 'C:\Users\Juan\terrasol-web\recuperado\assets\logo.png'
$dst = 'C:\Users\Juan\terrasol-web\site\assets\img\marca'
$img = [System.Drawing.Bitmap]::new($src)
$W = [int]$img.Width; $H = [int]$img.Height

function Lum($c) { return (0.299 * $c.R + 0.587 * $c.G + 0.114 * $c.B) }
function EsVerde($c) { return ($c.G -gt ($c.R + 18)) -and ($c.G -gt ($c.B + 18)) }

$TINTA = 90.0    # luminancia del gris del texto
$CORTE = 160.0   # por encima de esto no es texto (es placa o sombra en relieve)

# --- caja del isotipo (pixeles verdes) ---
$gx0 = $W; $gx1 = 0; $gy0 = $H; $gy1 = 0
for ($x = 0; $x -lt $W; $x++) {
  for ($y = 0; $y -lt $H; $y++) {
    if (EsVerde $img.GetPixel($x, $y)) {
      if ($x -lt $gx0) { $gx0 = $x }; if ($x -gt $gx1) { $gx1 = $x }
      if ($y -lt $gy0) { $gy0 = $y }; if ($y -gt $gy1) { $gy1 = $y }
    }
  }
}

# --- caja del texto (pixeles por debajo del corte, a la derecha del isotipo) ---
$tx0 = $W; $tx1 = 0; $ty0 = $H; $ty1 = 0
for ($x = ($gx1 + 6); $x -lt $W; $x++) {
  for ($y = 0; $y -lt $H; $y++) {
    if ((Lum $img.GetPixel($x, $y)) -lt $CORTE) {
      if ($x -lt $tx0) { $tx0 = $x }; if ($x -gt $tx1) { $tx1 = $x }
      if ($y -lt $ty0) { $ty0 = $y }; if ($y -gt $ty1) { $ty1 = $y }
    }
  }
}

$minX = [Math]::Min($gx0, $tx0); $maxX = [Math]::Max($gx1, $tx1)
$minY = [Math]::Min($gy0, $ty0); $maxY = [Math]::Max($gy1, $ty1)
$cw = $maxX - $minX + 1; $ch = $maxY - $minY + 1
Write-Output "isotipo: x $gx0..$gx1  y $gy0..$gy1"
Write-Output "texto:   x $tx0..$tx1  y $ty0..$ty1"
Write-Output "recorte final: ${cw}x${ch}"

function Construir([bool]$blanco) {
  $bmp = [System.Drawing.Bitmap]::new($cw, $ch, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  for ($x = 0; $x -lt $cw; $x++) {
    for ($y = 0; $y -lt $ch; $y++) {
      $ox = $minX + $x; $oy = $minY + $y
      $c = $img.GetPixel($ox, $oy)
      $enIsotipo = ($ox -ge $gx0 -and $ox -le $gx1 -and $oy -ge $gy0 -and $oy -le $gy1)

      if ($enIsotipo) {
        # opaco: verde tal cual, resto blanco puro
        if (EsVerde $c) {
          $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $c.R, $c.G, $c.B))
        } else {
          $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, 255, 255, 255))
        }
      } else {
        $l = Lum $c
        $a = [int][Math]::Round(255 * [Math]::Min(1.0, [Math]::Max(0.0, ($CORTE - $l) / ($CORTE - $TINTA))))
        if ($a -le 3) {
          $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } elseif ($blanco) {
          $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($a, 255, 255, 255))
        } else {
          $v = [int][Math]::Max(0, [Math]::Min(255, $l))
          $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($a, $v, $v, $v))
        }
      }
    }
  }
  return $bmp
}

$a = Construir $false
$a.Save("$dst\terrasol-logo.png", [System.Drawing.Imaging.ImageFormat]::Png); $a.Dispose()
$b = Construir $true
$b.Save("$dst\terrasol-logo-blanco.png", [System.Drawing.Imaging.ImageFormat]::Png); $b.Dispose()
$img.Dispose()
Write-Output "generados: terrasol-logo.png y terrasol-logo-blanco.png"
