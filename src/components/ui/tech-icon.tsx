import { 
  SiPython, SiNumpy, SiPandas, SiScikitlearn, SiJupyter, SiGit, SiTableau, SiAmazon, SiMysql 
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { VscAzure } from "react-icons/vsc";
import { IconType } from "react-icons";

const iconMap: { [key: string]: IconType } = {
  "Python": SiPython,
  "SQL": BsFiletypeSql,
  "NumPy": SiNumpy,
  "Pandas": SiPandas,
  "Matplotlib": SiPandas, // Using Pandas icon as a proxy
  "Seaborn": SiPandas, // Using Pandas icon as a proxy
  "Scikit-Learn": SiScikitlearn,
  "Jupyter Notebook": SiJupyter,
  "Git": SiGit,
  "Microsoft Excel": FaDatabase, // Using generic database icon
  "Tableau": SiTableau,
  "MySQL": SiMysql,
  "AWS": SiAmazon,
  "Azure": VscAzure,
};

interface TechIconProps {
  skillName: string;
  size?: number;
}

export function TechIcon({ skillName, size = 28 }: TechIconProps) {
  const IconComponent = iconMap[skillName];

  if (!IconComponent) {
    return null; // Or a default icon
  }

  return <IconComponent size={size} />;
}
