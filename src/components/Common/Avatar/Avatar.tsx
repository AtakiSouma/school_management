import Image from "next/image";

interface CustomerAvatarProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const CustomerAvatar: React.FC<CustomerAvatarProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`rounded-full ${className}`}
      sizes="100"
      layout="fixed"
      quality={100}
    />
  );
};

export default CustomerAvatar;
