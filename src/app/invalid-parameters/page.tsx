export function InvalidParameters() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Invalid Parameters</h1>
                <p className="text-muted-foreground">
                    Missing or invalid meeting parameters
                </p>
            </div>
        </div>
    );
}