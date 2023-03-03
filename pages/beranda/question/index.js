import React from 'react';
import DetailQuestion from './detailquestion';
export default function index() {
  return (
    <div className="w-full  lg:px-[175px] flex flex-col items-center justify-center">
      <div className="text-center md:w-3/4 flex flex-col gap-[15px] mb-[30px] lg:mb-[100px]">
        <h2>BANYAK YANG NANYA</h2>
        <h1>Pertanyaan Yang Sering Ditanyain</h1>
        <p>Sebenernya pertanyaan-pertanyaan ini kagak ada yang nanya sih, tapi ya ditaruh sini aja siapa tau lo mau baca ‘kan.</p>
      </div>
      <DetailQuestion
        title="Apakah aplikasi ini sudah dapat izin dari MUI?"
        detail="Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah."
      />
      <DetailQuestion
        title="Apakah data saya akan dijual ke agen khusus US?"
        detail="Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah."
      />
      <DetailQuestion
        title="Kenapa bumi muter? Apa karena di depan ada yang nikah?"
        detail="Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah."
      />
      <DetailQuestion
        title="Gimana caranya supaya si Rizal mau bikin konten buat Array ID?"
        detail="Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah."
      />
      <DetailQuestion
        title="Pertanyaan di atas gabakal ada yang bisa jawab sih"
        detail="Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah."
      />
      <DetailQuestion
        title="Kenapa game epep burik, bang?"
        detail="Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah."
      />
    </div>
  );
}
