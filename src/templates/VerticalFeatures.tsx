import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const VerticalFeatures = () => (
  <Section
    grey
    max
    yPadding="pb-20 "
    title="Kenapa Harus Playard"
    description="
    adalah platform untuk menghubungkan pencari dan penggemar bola basket untuk bermain bersama dengan mudah. Jadikan olahraga sebagai bagian dari gaya hidup kamu dan temukan teman baru dengan minat yang sama!"
  >
    <VerticalFeatureRow
      title={
        <>
          {`Perbaharui Lifestyle Menjadi `}
          <span className="text-heliotrope-400">Lebih Sehat</span>
        </>
      }
      description="
      Olahraga jadi lebih mudah, mau sendiri ataupun dengan teman sekarang bisa bermain basket kapanpun dan bersama orang lain."
      image="/assets/images/landing1.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title={
        <>
          {`Pilih Kawan dan Lawan `}
          <span className="text-heliotrope-400">Sesuka Kamu</span>
        </>
      }
      description="
      Dengan klasifikasi level bermain yang beragam, kamu bisa bertemu kawan bermain yang pas atau tantang diri kamu di level yang lebih tinggi."
      image="/assets/images/landing2.png"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title={
        <>
          {`Buka `}
          <span className="text-heliotrope-400">Lobi</span>
          {` dan Dapatkan `}
          <span className="text-heliotrope-400">Untung</span>
        </>
      }
      description="Dengan proses membuat lobi yang mudah, kamu bisa buat dan ramaikan lobi agar bisa dapat untung dari uang yang terkumpulkan."
      image="/assets/images/landing3.png"
      imageAlt="Third feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title={
        <>
          {`Kumpulkan Poin dan `}
          <span className="text-heliotrope-400"> Dapatkan Reward</span>
        </>
      }
      description="Dapatkan poin dari setiap aktivitas kamu di playard dan tukarkan poin dengan reward-reward yang menarik."
      image="/assets/images/landing4.png"
      imageAlt="Fourth feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
