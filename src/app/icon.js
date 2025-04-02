import { ImageResponse } from "next/og";

export const size = {
  width: 1024,
  height: 1024,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 150,
          padding: 50,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <img
          src={`http://localhost:3000/asset/images/flowiix_logo.png`} // Full URL for local development
          width={500}
          height={500}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
