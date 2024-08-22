import { Flame } from 'lucide-react';
import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Favicon oluşturma
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: size.width,
                    height: size.height,
                    background: 'black',
                    color: 'white',
                    borderRadius: '50%',
                }}
            >
                A
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        },
    );
}
