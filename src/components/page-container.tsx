export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
        {children}
      </div>
    </div>
  );
}
