export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30">
      <div className="text-center space-y-4">
        <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
          <svg
            className="h-8 w-8 text-primary animate-spin"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-serif font-semibold">Loading...</h2>
          <p className="text-muted-foreground">Please wait while we prepare your content</p>
        </div>
        <div className="flex justify-center">
          <div className="loading-shimmer h-2 w-32 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
