# 🎬 Movie App

Filmler hakkında bilgi almak için mini bir uygulama.

## 🎥 Demo

[Uygulama Demo Videosu](https://drive.google.com/file/d/1iV5sBo-2usCnYsaRDjILwmSTKjL12Ays/view?usp=share_link)

## 🚀 Özellikler

- Popüler filmleri keşfetme
- Detaylı film bilgilerine erişim
- Favori film listesi oluşturma
- Offline kullanım desteği
- Modern ve kullanıcı dostu arayüz

## 🛠 Teknoloji Stack'i

- React Native
- TypeScript
- Redux Toolkit
- React Navigation

### State Yönetimi

- **@reduxjs/toolkit & react-redux**
    - Modern Redux mimarisi
    - Hook tabanlı state yönetimi
    - Güçlü DevTools entegrasyonu
    - Optimize edilmiş performans

### Veri Yönetimi

- **redux-persist**
    - Offline veri desteği
    - AsyncStorage entegrasyonu
    - Seçici veri saklama
    - Otomatik state yenileme

### Yardımcı Kütüphaneler

- **date-fns**: Modern tarih işlemleri
- **axios**: HTTP istekleri

## 🔧 Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri)
- Yarn paket yöneticisi

### Adımlar

1. Projeyi klonlayın

git clone https://github.com/mertkutukcu07/moovbuddy-case.git

2. Bağımlılıkları yükleyin

yarn

### 🎯 Çalıştırma

yarn start

iOS için
Terminalde i tuşuna basabilirsiniz.

Android için
Terminalde a tuşuna basabilirsiniz.

## 📚 Temel Kütüphane Tercihleri

### State Yönetimi

- **@reduxjs/toolkit**

    - Redux'ın modern ve optimize edilmiş versiyonu
    - Daha az boilerplate kod yazımı sağlar
    - DevTools entegrasyonu

- **react-redux **
    - Redux store'u React uygulamasına bağlar
    - Hook tabanlı API (useSelector, useDispatch)
    - Performans optimizasyonları

### Veri Kalıcılığı

- **redux-persist (v6.0.0)**
    - Redux store'unu AsyncStorage'da saklar
    - Uygulama yeniden açıldığında verileri korur
    - Offline kullanım desteği
    - Seçici veri saklama özelliği
    - Otomatik state geri yükleme

### Tarih İşlemleri

- **date-fns (v4.1.0)**
    - Modern JavaScript tarih manipülasyonu
    - Tree-shaking desteği ile küçük bundle boyutu
    - Düzenli olarak güncelleme alması
    - Uluslararası tarih formatları desteği
    - TypeScript ile tam uyumluluk
