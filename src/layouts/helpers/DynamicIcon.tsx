import { FC } from "react";
import type { IconType } from "react-icons";
import * as FaIcons6 from "react-icons/fa6";
import * as CiIcons from "react-icons/ci";

const iconLibraries: Record<string, Record<string, IconType>> = {
  fa: FaIcons6,
  ci: CiIcons,
};

interface IDynamicIcon extends React.SVGProps<SVGSVGElement> {
  icon: string; 
  className?: string;
}

const DynamicIcon: FC<IDynamicIcon> = ({ icon, ...props }) => {
  const prefix = icon.slice(0, 2).toLowerCase();
  const library = iconLibraries[prefix];
  const Icon = library ? (library as Record<string, IconType>)[icon] : undefined;

  if (!Icon) {
    return <span className="text-sm text-primary">Icon not found</span>;
  }

  return <Icon {...props} />;
};

export default DynamicIcon;
