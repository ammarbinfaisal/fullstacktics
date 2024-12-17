export function Unauthorized() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Unauthorized Access</h1>
                <p className="text-muted-foreground">
                    This page can only be accessed through Cal.com
                </p>
            </div>
        </div>
    );
}