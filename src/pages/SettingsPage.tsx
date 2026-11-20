import { useRef, type KeyboardEvent } from 'react';
import { useWorkspacePreferences } from '../app/useWorkspacePreferences';
import type { ReadingSizePreference, ThemePreference } from '../infrastructure/preferences/theme';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ObservatoryHeader } from '../components/ui/ObservatoryHeader';

const THEME_OPTIONS: readonly {
  readonly value: ThemePreference;
  readonly label: string;
  readonly hint: string;
}[] = [
  { value: 'system', label: 'Theo hệ thống', hint: 'Tự động khớp cài đặt thiết bị' },
  { value: 'light', label: 'Sáng', hint: 'Bầu trời ban mai dịu mắt' },
  { value: 'dark', label: 'Tối', hint: 'Bầu trời đêm sâu cho phiên học tối' },
];

const READING_SIZE_OPTIONS: readonly {
  readonly value: ReadingSizePreference;
  readonly label: string;
  readonly hint: string;
}[] = [
  { value: 'normal', label: 'Tiêu chuẩn (16px)', hint: 'Cân bằng cho đọc dài và xem bảng biểu' },
  {
    value: 'comfortable',
    label: 'Thoải mái (18px)',
    hint: 'Cỡ chữ lớn hơn cho phiên đọc bài giảng',
  },
];

export default function SettingsPage() {
  const { preferences, resolvedTheme, storageWarning, setTheme, setReadingSize } =
    useWorkspacePreferences();
  const themeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const readingRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleRadioKeyDown = <T,>(
    event: KeyboardEvent<HTMLButtonElement>,
    options: readonly { readonly value: T }[],
    currentIndex: number,
    onSelect: (value: T) => void,
    refs: (HTMLButtonElement | null)[],
  ) => {
    let nextIndex: number | null = null;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % options.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + options.length) % options.length;
    }
    if (nextIndex !== null) {
      event.preventDefault();
      const target = options[nextIndex];
      if (target) {
        onSelect(target.value);
        refs[nextIndex]?.focus();
      }
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <ObservatoryHeader
        breadcrumbs={<Breadcrumbs items={[{ label: 'Tổng quan', to: '/' }, { label: 'Cài đặt' }]} />}
        title="Cài đặt không gian học"
        description="Tùy chỉnh giao diện hiển thị và trải nghiệm đọc bài giảng. Các tùy chọn này chỉ lưu cục bộ trên trình duyệt của bạn."
      />

      {storageWarning ? (
        <div
          role="status"
          className="rounded-[var(--radius-md)] border border-warning/30 bg-warning-subtle px-4 py-3 text-sm text-warning"
        >
          Trình duyệt hiện không cho phép ghi bộ nhớ cục bộ. Tùy chỉnh vẫn áp dụng trong phiên làm
          việc này nhưng có thể không được giữ lại sau khi tải lại trang.
        </div>
      ) : null}

      {/* Two-column Observatory settings panels */}
      <div className="hus-card-surface divide-y divide-border overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface">
        {/* Theme selection */}
        <section className="grid grid-cols-1 gap-5 p-6 lg:grid-cols-12 lg:gap-8 lg:p-7">
          <div className="lg:col-span-4">
            <h2 className="heading-section">Giao diện màu sắc</h2>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
              Đang hiển thị: {resolvedTheme === 'dark' ? 'Chế độ tối' : 'Chế độ sáng'}.
            </p>
          </div>

          <div
            className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-8"
            role="radiogroup"
            aria-label="Chọn giao diện màu sắc"
          >
            {THEME_OPTIONS.map((option, index) => {
              const isSelected = preferences.theme === option.value;
              return (
                <button
                  key={option.value}
                  ref={el => {
                    themeRefs.current[index] = el;
                  }}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setTheme(option.value)}
                  onKeyDown={event =>
                    handleRadioKeyDown(event, THEME_OPTIONS, index, setTheme, themeRefs.current)
                  }
                  className={`flex flex-col items-start rounded-[var(--radius-lg)] border p-4 text-left transition-[border-color,background-color,transform] duration-200 active:scale-[0.98] ${
                    isSelected
                      ? 'border-accent bg-accent-subtle text-accent-ink'
                      : 'border-border bg-canvas/70 text-ink hover:border-border-strong hover:bg-surface-subtle'
                  }`}
                >
                  <span className="text-sm font-semibold">{option.label}</span>
                  <span className="mt-1 text-xs text-ink-muted">{option.hint}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Reading typography scale */}
        <section className="grid grid-cols-1 gap-5 p-6 lg:grid-cols-12 lg:gap-8 lg:p-7">
          <div className="lg:col-span-4">
            <h2 className="heading-section">Cỡ chữ đọc bài giảng</h2>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
              Áp dụng cho nội dung lý thuyết và ghi chú học thuật trong không gian bài học.
            </p>
          </div>

          <div
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-8"
            role="radiogroup"
            aria-label="Chọn cỡ chữ đọc"
          >
            {READING_SIZE_OPTIONS.map((option, index) => {
              const isSelected = preferences.readingSize === option.value;
              return (
                <button
                  key={option.value}
                  ref={el => {
                    readingRefs.current[index] = el;
                  }}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setReadingSize(option.value)}
                  onKeyDown={event =>
                    handleRadioKeyDown(
                      event,
                      READING_SIZE_OPTIONS,
                      index,
                      setReadingSize,
                      readingRefs.current,
                    )
                  }
                  className={`flex flex-col items-start rounded-[var(--radius-lg)] border p-4 text-left transition-[border-color,background-color,transform] duration-200 active:scale-[0.98] ${
                    isSelected
                      ? 'border-accent bg-accent-subtle text-accent-ink'
                      : 'border-border bg-canvas/70 text-ink hover:border-border-strong hover:bg-surface-subtle'
                  }`}
                >
                  <span className="text-sm font-semibold">{option.label}</span>
                  <span className="mt-1 text-xs text-ink-muted">{option.hint}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Accessibility & static privacy info */}
        <section className="grid grid-cols-1 gap-5 bg-surface-subtle/40 p-6 lg:grid-cols-12 lg:gap-8 lg:p-7">
          <div className="lg:col-span-4">
            <h2 className="heading-section">Tiếp cận &amp; quyền riêng tư</h2>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-secondary lg:col-span-8">
            <li>Hỗ trợ điều hướng bàn phím đầy đủ và liên kết bỏ qua để vào thẳng nội dung chính.</li>
            <li>Tự động giảm hiệu ứng chuyển động khi thiết bị bật chế độ Reduce Motion.</li>
            <li>Ứng dụng tĩnh 100%, không thu thập dữ liệu người dùng và không phụ thuộc máy chủ ngoài.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
