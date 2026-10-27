import "./styles.css";

export type TapeProps = {
  /** CSS offsets (`-12px`, `50%`); unset sides keep the stylesheet default. */
  top?: string;
  left?: string;
  right?: string;
  /** Tilt in degrees. */
  rotate?: number;
  width?: number;
  height?: number;
};

/** Decorative strip of masking tape holding a card or photo. */
export function Tape({ top, left, right, rotate, width, height }: TapeProps) {
  const vars: Record<string, string | number | undefined> = {
    "--tape-top": top,
    "--tape-left": left,
    "--tape-right": right,
    "--tape-rotate": rotate === undefined ? undefined : `${rotate}deg`,
    width,
    height,
  };
  return (
    <span
      className="tape"
      style={Object.fromEntries(
        Object.entries(vars).filter(([, value]) => value !== undefined),
      )}
      aria-hidden="true"
    />
  );
}
