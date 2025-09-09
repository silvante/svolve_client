export default function OrgFooter() {
  return (
    <footer className="w-full py-3 text-sm">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3 text-gray-600">
          <span>
            © <strong className="text-gray-800">svolve</strong>{" "}
            <span className="text-xs">2025</span>
          </span>
          <span className="hidden sm:inline">• All rights reserved</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="/panel/docs" target="_blanck" className="hover:underline">
            Docs
          </a>
          <a href="/panel/support" target="_blanck" className="hover:underline">
            Support
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="/panel/settings"
            target="_blanck"
            className="text-xs px-2 py-1 rounded-full bg-white/50 border border-gray-200"
          >
            Organization
          </a>
        </div>
      </div>
    </footer>
  );
}
