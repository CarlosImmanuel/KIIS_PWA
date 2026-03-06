import type { ViewType } from "../../hooks/useNavigation";
import { NilaiView } from "../Page/NilaiView";
import { EditProfileView } from "../Page/EditProfileView";
import { UbahPasswordView } from "../Page/UbahPasswordView";
import { RekapKuliahView } from "../Page/RekapKuliahView";
import { DetailRekapKuliahView } from "../Page/DetailRekapKuliahView";
import { JadwalMahasiswaView } from "../Page/JadwalMahasiswaView";
import { JadwalUjianMahasiswaView } from "../Page/JadwalUjianMahasiswaView";
import { KuesionerView } from "../Page/KuesionerView";
import { BerandaRegistrasiView } from "../Page/BerandaRegistrasi";
import { RegistrasiMataKuliahView } from "../Page/RegistrasiMataKuliahView";
import { StatusRegistrasiView } from "../Page/StatusRegistrasiView";
import { TagihanRegistrasiView } from "../Page/TagihanRegistrasiView";
import { DetailTagihanView } from "../Page/DetailTagihanView";
import { RegistrasiUjianSusulanView } from "../Page/RegistrasiUjianSusulanView";
// import { PendaftaranWisudaView } from "../Page/PendaftaranWisudaView";
// import { PengajuanBebasPustakaView } from "../Page/PengajuanBebasPustakaView";

interface AppRouterProps {
  currentView: ViewType;
  onBack: (view: ViewType, tab: string) => void;
  onMenuToggle: () => void;
  selectedMataKuliah: any;
  selectedTagihan: any;
  statusRegistrasiKRS: number;
  onMataKuliahSelect: (mataKuliah: any, view: ViewType, tab: string) => void;
  onTagihanSelect: (tagihan: any, view: ViewType, tab: string) => void;
}

export function AppRouter({
  currentView,
  onBack,
  onMenuToggle,
  selectedMataKuliah,
  selectedTagihan,
  statusRegistrasiKRS,
  onMataKuliahSelect,
  onTagihanSelect,
}: AppRouterProps) {
  switch (currentView) {
    case "nilai":
      return <NilaiView onMenuToggle={onMenuToggle} />;

    case "editProfile":
      return (
        <EditProfileView
          onBack={() => onBack("dashboard", "home")}
          onMenuToggle={onMenuToggle}
        />
      );

    case "ubahPassword":
      return (
        <UbahPasswordView
          onBack={() => onBack("dashboard", "home")}
          onMenuToggle={onMenuToggle}
        />
      );

    case "rekapKuliah":
      return (
        <RekapKuliahView
          onBack={() => onBack("dashboard", "home")}
          onMenuToggle={onMenuToggle}
          onDetailClick={(kode, mataKuliah) => {
            onMataKuliahSelect({ kode, mataKuliah }, "detailRekapKuliah", "rekapKuliah");
          }}
        />
      );

    case "detailRekapKuliah":
      return (
        <DetailRekapKuliahView
          onBack={() => onBack("rekapKuliah", "rekapKuliah")}
          onMenuToggle={onMenuToggle}
          mataKuliah={selectedMataKuliah?.mataKuliah || "LAB. PENGOLAHAN CITRA"}
          kode={selectedMataKuliah?.kode || "LAB_PENGANTAR_TEKNILOGI_INFORMASI"}
        />
      );

    case "jadwalMahasiswa":
      return (
        <JadwalMahasiswaView
          onBack={() => onBack("dashboard", "home")}
          onMenuToggle={onMenuToggle}
        />
      );

    case "jadwalUjianMahasiswa":
      return (
        <JadwalUjianMahasiswaView
          onBack={() => onBack("dashboard", "home")}
          onMenuToggle={onMenuToggle}
          onKuesionerClick={(mataKuliah) => {
            onMataKuliahSelect(mataKuliah, "kuesioner", "kuesioner");
          }}
        />
      );

    case "kuesioner":
      return (
        <KuesionerView
          onBack={() => onBack("jadwalUjianMahasiswa", "jadwal")}
          onMenuToggle={onMenuToggle}
          mataKuliah={selectedMataKuliah}
        />
      );

    case "berandaRegistrasi":
      return (
        <BerandaRegistrasiView
          onBack={() => onBack("dashboard", "home")}
          onMenuToggle={onMenuToggle}
        />
      );

    case "registrasiMataKuliah":
      return (
        <RegistrasiMataKuliahView
          onBack={() => onBack("dashboard", "home")}
          onMenuToggle={onMenuToggle}
          statusRegistrasi={statusRegistrasiKRS}
        />
      );

    case "statusRegistrasi":
      return (
        <StatusRegistrasiView
          onBack={() => onBack("dashboard", "home")}
          onMenuToggle={onMenuToggle}
        />
      );

    case "tagihanRegistrasi":
      return (
        <TagihanRegistrasiView
          onDetailClick={(tagihan) => {
            onTagihanSelect(tagihan, "detailTagihan", "registrasiMataKuliah");
          }}
        />
      );

    case "detailTagihan":
      return (
        <DetailTagihanView
          onMenuToggle={onMenuToggle}
          tagihan={selectedTagihan}
        />
      );

    case "registrasiUjianSusulan":
      return (
        <RegistrasiUjianSusulanView
          onBack={() => onBack("dashboard", "home")}
          onMenuToggle={onMenuToggle}
        />
      );

    // case "pendaftaranWisuda":
    //   return (
    //     <PendaftaranWisudaView
    //       onBack={() => onBack("dashboard", "home")}
    //       onMenuToggle={onMenuToggle}
    //     />
    //   );

    // case "pengajuanBebasPustaka":
    //   return (
    //     <PengajuanBebasPustakaView
    //       onBack={() => onBack("dashboard", "home")}
    //       onMenuToggle={onMenuToggle}
    //     />
    //   );

    default:
      return null;
  }
}
