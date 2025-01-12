import BuildIcon from "@mui/icons-material/Build";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import ImagesearchRollerOutlinedIcon from "@mui/icons-material/ImagesearchRollerOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import FoundationOutlinedIcon from "@mui/icons-material/FoundationOutlined";
import ForestIcon from "@mui/icons-material/Forest";
import SevereColdIcon from "@mui/icons-material/SevereCold";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
const categories = [
  {
    icon: <BuildIcon color="primary" />,
    title: "Plomberie",
    description: "Réparations et installations sanitaires",
    path: "/plomberie",
  },
  {
    icon: <ElectricalServicesIcon color="primary" />,
    title: "Électricité",
    description: "Installation et mise aux normes",
    path: "/electricite",
  },
  {
    icon: <ImagesearchRollerOutlinedIcon color="primary" />,
    title: "Peinture",
    description: "Travaux de peinture et décoration",
    path: "/peinture",
  },
  {
    icon: <HandymanOutlinedIcon color="primary" />,
    title: "Menuiserie",
    description: "Création et réparation sur mesure",
    path: "/menuiserie",
  },
  {
    icon: <FoundationOutlinedIcon color="primary" />,
    title: "Maçonnerie",
    description: "Solutions contre l'humidité",
    path: "/maconnerie",
  },
  {
    icon: <ForestIcon color="primary" />,
    title: "Jardinage",
    description: "Entretien et aménagement extérieur",
    path: "/jardinage",
  },
  {
    icon: <SevereColdIcon color="primary" />,
    title: "Climatisation",
    description: "Installation et maintenance de climatisation",
    path: "/climatisation",
  },
  {
    icon: <CleanHandsIcon color="primary" />,
    title: "Nettoyage",
    description: "Services de nettoyage professionnel",
    path: "/nettoyage",
  },
];

export default categories;
