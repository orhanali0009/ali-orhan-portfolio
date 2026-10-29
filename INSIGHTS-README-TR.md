# Ali Orhan — Insights V4

Mevcut V3 kaynağı korunarak hazırlandı. Ana sayfadaki Writing alanı Insights kartlarına dönüştürüldü. Ayrı arşiv /insights, detaylar /insights/[slug]. Eski /writing/[slug] adresleri 308 ile yönlenir.

## İçerik yönetimi

content/insights.ts tek içerik kaynağıdır. Her kayıt slug, category, title, summary, sections ve sources içerir. Beş mevcut kayıt taslak editoryal örnektir; kullanıcı tarafından yazılmış makale olarak sunulmaz.

Taslak: status: 'draft'; publishedAt eklemeyin. Ekranda Draft ve Not published görünür; detay sayfası noindex olur. Taslaklar herkese açık örneklerdir; noindex erişim kontrolü değildir. Gizli yazıları bu dosyaya koymayın.

Gerçek yazı tamamlandığında metni ve kaynakları gözden geçirip status: 'published' ve publishedAt: '2026-10-29' gibi gerçek yayın tarihini ekleyin. Tarih UTC üzerinden İngilizce gösterilir. Okuma süresi yaklaşık 200 kelime/dakika ile hesaplanır; mevcut kısa taslaklar 1 dakikadır. Kaynak listeleri Sources / Planned reading & sources başlığı altında gösterilir. Kaynaksız taslaklarda kaynakların henüz eklenmediği belirtilir.

## Kurulum ve kontrol

Node.js kurulu bir terminalde proje klasörünü açın:

```powershell
npm.cmd ci
npm.cmd run build
npm.cmd audit
npm.cmd run dev
```

http://localhost:3000/insights adresini açın. Üretim önizlemesi: npm.cmd run start (önce build).

## Güvenlik ve doğrulama — 29 Ekim 2026

- Next.js 15.5.28 korundu. İlk taramada 1 moderate / 1 high bulundu.
- Uyarılar Next.js > PostCSS bağımlılık zincirinden geliyordu. package.json overrides alanıyla PostCSS 8.5.32 sürümüne sabitlendi; package-lock.json güncellendi. Next.js ana sürüm yükseltmesi yapılmadı.
- Son npm audit: 0 açık. Bu, tarama anındaki npm veritabanı sonucudur; genel güvenlik garantisi değildir.
- next build başarılı; TypeScript denetimi ve 14 statik sayfa üretimi tamamlandı.
- Ana sayfa, arşiv, 5 makale detayı ve 4 proje detayı HTTP 200 döndü.
- Eski yazı bağlantısında 308 yönlendirme; bilinmeyen insight ve writing adreslerinde 404 doğrulandı.
- Beş kategori ve All filtresi tarayıcıda test edildi. Her kategori 1, All 5 kart gösterdi.
- Mobil arşiv ve detay sayfasında yatay taşma ölçülmedi; masaüstü görünümü incelendi.
- Taslak detaylarında noindex, Not published, okuma süresi ve kaynak alanı doğrulandı.

## Mevcut GitHub deposunu güncelleme

1. Mevcut proje klasörünü yedekleyin. ZIP dosyasını açınca çıkan proje dosyalarını mevcut Git deposunun köküne kopyalayın; fazladan iç içe proje klasörü oluşturmayın. Mevcut .git klasörünü koruyun. ZIP .git, node_modules ve .next içermez.
2. Yerel değişikliklerinizi git diff ile inceleyin. Başka değişiklikleriniz varsa bu dosyaları körlemesine üzerine yazmayın.
3. npm.cmd ci, npm.cmd run build ve npm.cmd audit çalıştırın.
4. Mevcut deponuzun terminalinde:

```powershell
git status
git add app content package.json package-lock.json INSIGHTS-README-TR.md
git commit -m "Add editorial Insights journal and category filters"
git push origin main
```

Bu komut main dalını varsayar; mevcut dalınızı önce git branch --show-current ile kontrol edin.

## Vercel güncellemesi

Mevcut ali-orhan-portfolio projesini kullanın. Settings > Git bölümünde orhanali0009/ali-orhan-portfolio bağlantısını ve Production Branch ayarını kontrol edin. Bağlı üretim dalına gönderim otomatik dağıtımı tetikler. Deployments bölümündeki yeni dağıtım Ready olduğunda proje alan adından /insights, kategori filtreleri ve bir detay sayfasını kontrol edin. Eski dağıtıma özgü URL yerine proje Domains alanındaki üretim adresini kullanın.

Kaynak: https://vercel.com/docs/git/vercel-for-github

Bu çalışma GitHub'a gönderilmedi ve Vercel'e yayımlanmadı. Kaynak dosyalar ve test edilmiş bağımlılık kilidi teslim edildi.

## Değişen dosyalar

- app/page.tsx, app/globals.css
- app/components/InsightCards.tsx (yeni)
- app/insights/page.tsx (yeni)
- app/insights/[slug]/page.tsx (yeni)
- app/writing/[slug]/page.tsx (yönlendirme)
- content/insights.ts (yeni)
- content/data.ts (eski makale kopyaları kaldırıldı; projeler korundu)
- package.json, package-lock.json

Ana sayfanın önceki sürümünden gelen örnek e-posta ve LinkedIn bağlantıları hâlâ kişiselleştirilmelidir. Proje bilgileri ve diğer kişisel metinler bu Insights çalışmasında doğrulanmadı.

