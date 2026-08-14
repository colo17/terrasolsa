# Descarga y optimiza las imagenes generadas para el sitio.
$ErrorActionPreference = 'Continue'
$B = 'https://d8j0ntlcm91z4.cloudfront.net/user_3EMeSCjEigRXJTmHjcSRdBvxToL/'
$site = 'C:\Users\Juan\terrasol-web\site\assets\img'
$tmp = "$env:TEMP\terrasol_img"
New-Item -ItemType Directory -Force $tmp | Out-Null
New-Item -ItemType Directory -Force "$site\proceso" | Out-Null
New-Item -ItemType Directory -Force "$site\maquinas" | Out-Null
New-Item -ItemType Directory -Force "$site\lineas" | Out-Null

# archivo remoto ; destino relativo ; ancho destino
$mapa = @(
  # --- etapas del proceso (16:9) ---
  @('hf_20260814_040015_03da6640-ae5a-4c72-bfc3-9222b0b5796e.png', 'proceso\almacenaje.jpg', 1280),
  @('hf_20260814_040015_7448b426-ff5d-4463-9cbb-b74690715540.png', 'proceso\transporte.jpg', 1280),
  @('hf_20260814_040015_22991bf3-e7c9-4a77-b902-9753a8e92041.png', 'proceso\limpieza.jpg', 1280),
  @('hf_20260814_040015_db91aaa9-af05-4698-9b4b-7588aa38e105.png', 'proceso\despedrado.jpg', 1280),
  @('hf_20260814_040015_f9cf94ed-74d1-446c-977d-984d04b1c50a.png', 'proceso\descascarado.jpg', 1280),
  @('hf_20260814_040015_462798ff-36ad-49d7-bdb5-482910f4c67e.png', 'proceso\separado.jpg', 1280),
  @('hf_20260814_040015_73d4fc4c-f40f-46d2-8f68-f70f59c386c1.png', 'proceso\blanqueado.jpg', 1280),
  @('hf_20260814_040015_4026ee6b-48c1-4884-8830-ae947d7ea573.png', 'proceso\clasificado.jpg', 1280),
  @('hf_20260814_040015_7538fec0-9cda-4333-9270-619528e1a752.png', 'proceso\molienda.jpg', 1280),
  @('hf_20260814_040015_5b8e9baa-9fb4-4282-8b7c-cc0fafb3a52d.png', 'proceso\envasado.jpg', 1280),
  # --- maquinas (4:3) ---
  @('hf_20260814_035554_7c825249-6bc7-427d-8df7-3870ade9dd21.png', 'maquinas\mlgq-25.jpg', 800),
  @('hf_20260814_040054_c45b88b0-3dbf-4424-a1a8-388b9c8935f0.png', 'maquinas\tqs.jpg', 800),
  @('hf_20260814_040054_1a4a8525-1ed6-4fad-88ec-8b777621b9e7.png', 'maquinas\mgcz.jpg', 800),
  @('hf_20260814_040054_a5fef53d-ec4b-44d2-b3a1-b771de63481a.png', 'maquinas\mnml-40.jpg', 800),
  @('hf_20260814_040054_90b67c78-bc45-45e7-ad11-90512d651edb.png', 'maquinas\mnml-46.jpg', 800),
  @('hf_20260814_040054_06cd22ba-287f-4eca-bd97-81bb38e21ab2.png', 'maquinas\mnms-30a.jpg', 800),
  @('hf_20260814_040054_3cc40901-e9bf-4735-b71a-bb3ef28bc395.png', 'maquinas\cm.jpg', 800),
  @('hf_20260814_040054_0559e7b9-520c-48d4-b80d-b262444e431c.png', 'maquinas\mmjp.jpg', 800),
  @('hf_20260814_040054_3b4436bf-b0a4-4444-bdd4-a42160acc946.png', 'maquinas\tqlz-trigo.jpg', 800),
  @('hf_20260814_040054_548b5e63-8be9-4c60-a644-5bc082eac77f.png', 'maquinas\tqlmz.jpg', 800),
  @('hf_20260814_040054_7dd7986b-3d55-4610-a14f-40a0f4deed5a.png', 'maquinas\tqsf-trigo.jpg', 800),
  @('hf_20260814_040054_40855579-7089-49af-95fe-acf200dbfd08.png', 'maquinas\fsfj-mono.jpg', 800),
  @('hf_20260814_040054_634e19a0-2b05-4f9f-9b4e-090ae2c41f13.png', 'maquinas\fsfj-doble.jpg', 800),
  @('hf_20260814_040133_3ba11e6f-1a7d-409e-af91-24a715812a80.png', 'maquinas\fsfg.jpg', 800),
  @('hf_20260814_040133_5f876fc6-3ca1-4c69-b7cb-e9cb29dde321.png', 'maquinas\ms-roller.jpg', 800),
  @('hf_20260814_040133_38528a6b-593e-4d1d-abf1-054a5ca36dc4.png', 'maquinas\lsm20.jpg', 800),
  @('hf_20260814_040133_5b0836a0-1b26-460f-9182-8aef58ccc476.png', 'maquinas\fqfd.jpg', 800),
  @('hf_20260814_040133_f55668ce-40ae-49d8-8a55-acd049431629.png', 'maquinas\fslz.jpg', 800),
  @('hf_20260814_040133_240eb4bd-bd15-4ed7-ade9-007a6188571c.png', 'maquinas\tblm.jpg', 800),
  @('hf_20260814_040133_adb3dd56-a7e3-4e38-9d08-e1a836c8c63a.png', 'maquinas\fdmw.jpg', 800),
  @('hf_20260814_040133_6a9c0b08-7b55-4456-bca9-c085a3ee2bc9.png', 'maquinas\selectoras.jpg', 800),
  @('hf_20260814_040133_ec74150b-d535-4e0a-86e8-6bf2e6eb83cf.png', 'maquinas\silos-conico.jpg', 800),
  @('hf_20260814_040133_58887295-a749-4cb9-8bf4-dcf7fc429e21.png', 'maquinas\silos-plano.jpg', 800),
  @('hf_20260814_040133_d8cb2ca7-5228-4f7d-aa42-abb7a6bbe5ab.png', 'maquinas\silos-inox.jpg', 800),
  @('hf_20260814_040133_0cb32cfb-d41d-47c4-a5a0-d5a5f913983f.png', 'maquinas\elevadores.jpg', 800),
  @('hf_20260814_040214_3e9dc23b-c91a-47c3-8633-85b1d35b6509.png', 'maquinas\redlers.jpg', 800),
  @('hf_20260814_040214_f02b785b-ade1-4573-8e66-975fb0080224.png', 'maquinas\cintas.jpg', 800),
  @('hf_20260814_040214_caa5581f-c400-47b3-b30c-7ab72ee7f7c2.png', 'maquinas\balanzas-flujo.jpg', 800),
  @('hf_20260814_040214_2e387149-5804-464b-89ff-53c6e17736f4.png', 'maquinas\balanzas-embolse.jpg', 800),
  @('hf_20260814_040214_dcc1e3e3-4f9b-4e0c-838a-96f1f790b4e3.png', 'maquinas\embolsadora-vacio.jpg', 800),
  @('hf_20260814_040214_01f4365f-3539-42d2-aac5-e5a4f87f88d7.png', 'maquinas\cosedora.jpg', 800),
  @('hf_20260814_040214_e8176172-0dcb-4fd6-8cae-2d05a3b9c1f9.png', 'maquinas\robots-paletizado.jpg', 800),
  @('hf_20260814_040214_b4010271-affd-41df-9176-657ed11453c9.png', 'maquinas\etiquetadoras.jpg', 800),
  @('hf_20260814_040214_0e0ece18-28a4-4586-88a5-0ebdbe966db2.png', 'maquinas\big-bag.jpg', 800),
  @('hf_20260814_040214_a1ff550c-53f6-469c-8469-02a31f8eecfc.png', 'maquinas\repuestos.jpg', 800),
  @('hf_20260814_040214_06b721d7-1750-43e9-8597-7b66e842c3e2.png', 'maquinas\tecnotok.jpg', 800),
  # --- linea de producto ---
  @('hf_20260814_040214_2b956298-1794-4710-bda5-a3e90c33a2de.png', 'lineas\legumbres.jpg', 600)
)

$ok = 0; $fail = 0
foreach ($m in $mapa) {
  $remoto = $m[0]; $destino = "$site\$($m[1])"; $ancho = $m[2]
  $crudo = "$tmp\$remoto"
  try {
    if (-not (Test-Path $crudo)) {
      Invoke-WebRequest -Uri ($B + $remoto) -OutFile $crudo -UseBasicParsing -TimeoutSec 120
    }
    ffmpeg -hide_banner -loglevel error -i $crudo -vf "scale=${ancho}:-2:flags=lanczos" -q:v 4 $destino -y
    if (Test-Path $destino) { $ok++ } else { $fail++; Write-Output "sin salida: $($m[1])" }
  } catch {
    $fail++; Write-Output "FALLO $($m[1]): $($_.Exception.Message)"
  }
}
Write-Output "listas: $ok   fallidas: $fail"
$total = (Get-ChildItem "$site\proceso", "$site\maquinas", "$site\lineas" -File | Measure-Object Length -Sum).Sum
Write-Output ("peso total imagenes: {0} MB" -f [math]::Round($total / 1MB, 2))
