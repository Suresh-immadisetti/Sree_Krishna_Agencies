export default function DebugBanner() {
  return (
    <div className="text-center max-w-2xl">
      <h1 className="text-3xl font-bold text-green-600 mb-4">✓ React is working!</h1>
      <div className="text-left space-y-2">
        <p className="font-semibold">Next steps:</p>
        <p>1. Header should appear below after dismissing</p>
        <p>2. Red border indicates content container</p>
        <p>3. Check console for any errors</p>
        <p className="text-sm text-gray-600 mt-4">
          If the app disappears after clicking, check:<br />
          - Browser console errors<br />
          - Network tab for failed loads<br />
          - React DevTools component tree
        </p>
      </div>
    </div>
  );
}