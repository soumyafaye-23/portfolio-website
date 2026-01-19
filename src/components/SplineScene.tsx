'use client';

export default function SplineScene() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <iframe
                src='https://my.spline.design/claritystream-McYu5CVqKe2pS2ekCdG1cZzO/'
                frameBorder='0'
                width='100%'
                height='100%'
                className="w-full h-full scale-110 pointer-events-none brightness-110 contrast-105" // Boosted brightness
                title="Spline 3D Scene"
            />
        </div>
    );
}
