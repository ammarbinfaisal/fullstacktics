import { GlowCapture, Glow } from "@codaworks/react-glow";

const GlowContainer = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <GlowCapture>
            <Glow color="pink"><div
                className="glow:bg-glow/40 glow:text-glow/40"
            >{children}</div></Glow>
        </GlowCapture>
    );
}

export default GlowContainer