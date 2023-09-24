import Image from "next/image";

export const Logo = () => {
    return <Image src={"/logo.svg"} height={35} width={35} alt="logo" />;
};

export default Logo;
