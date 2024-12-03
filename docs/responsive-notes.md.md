# Ghi chú màn hình responsive (Tailwind CSS)

## Breakpoints mặc định
- **sm**: ≥ 640px (mobile nhỏ)
- **md**: ≥ 768px (tablet hoặc mobile lớn)
- **lg**: ≥ 1024px (desktop)
- **xl**: ≥ 1280px (desktop lớn)
- **2xl**: ≥ 1536px (desktop cực lớn)

## Mẹo ghi nhớ
1. Thiết kế **mobile-first**: Bắt đầu từ màn hình nhỏ nhất.
2. Sử dụng class responsive Tailwind: `sm:`, `md:`, `lg:`, ...
3. Kiểm tra trên các công cụ như Chrome DevTools hoặc sử dụng giả lập màn hình.
4. Nếu cần thêm breakpoint tùy chỉnh, cập nhật `tailwind.config.js`.

## Breakpoints tùy chỉnh
- **tablet**: 900px
- **desktop-lg**: 1600px

**Ví dụ sử dụng**:
```html
<div class="text-sm md:text-lg lg:text-xl">
  Responsive text!
</div>
