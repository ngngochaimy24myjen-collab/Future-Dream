# Future-Dream ⭐
**Your Future Starts Here.** Nền tảng học ngôn ngữ miễn phí kết hợp Galaxy Dream, Modern Learning và Magical Adventure.

## Có trong bản đầu tiên
- Giao diện responsive, dark mode.
- Trang chủ, bản đồ bài học kiểu cánh cổng, từ vựng, truyện, tiến độ, bảng xếp hạng demo và cài đặt.
- Bài kiểm tra đầu vào 6 mức (đánh giá sơ bộ).
- Quiz, điểm Star bắt đầu ở 40; mỗi câu sai/bỏ qua trừ 2 Star, tối thiểu 0.
- Lưu từ, đánh dấu từ khó, tìm kiếm, nghe phát âm nếu trình duyệt hỗ trợ.
- Truyện tiếng Anh kèm từ vựng, một số truyện mở khóa bằng Star.
- Sáu cấp thành tích riêng với trình độ ngôn ngữ.
- Dữ liệu demo lưu trong localStorage; đăng ký/đăng nhập Supabase tùy chọn.

## Chạy thử
Mở `index.html` bằng trình duyệt. Nếu trình duyệt hạn chế tính năng với `file://`, hãy dùng VS Code + Live Server hoặc một máy chủ tĩnh.

## Đưa lên GitHub Pages
1. Mở repository `Future-Dream` → **Add file → Upload files**.
2. Tải lên `index.html`, `style.css`, `script.js`, `supabase.js`, `README.md`.
3. **Commit changes**.
4. Vào **Settings → Pages** → **Deploy from a branch** → chọn `main` và `/(root)` → **Save**.
5. Chờ triển khai và mở URL được GitHub Pages hiển thị.

## Cấu hình Supabase (tùy chọn)
1. Mở Supabase Dashboard → Project Settings → API.
2. Sao chép Project URL và **publishable key** (`sb_publishable_...`).
3. Điền trong `supabase.js`:
   ```js
   window.FD_SUPABASE_URL = "https://YOUR_PROJECT_REF.supabase.co";
   window.FD_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_YOUR_PUBLIC_KEY";
   ```
4. Trong Authentication → URL Configuration, đặt Site URL thành URL GitHub Pages của bạn, thêm URL đó vào Redirect URLs.
5. Bật Email provider. Nếu xác nhận email đang bật, người dùng cần xác nhận email để đăng nhập.

**Bảo mật:** chỉ dùng publishable key ở trình duyệt. Không đưa `service_role` hoặc secret key vào mã nguồn công khai.

## Cần phát triển thêm trước khi gọi là sản phẩm hoàn chỉnh
- Bảng xếp hạng đang là dữ liệu minh họa, không phải bảng toàn cầu.
- Đồng bộ flashcards, lịch sử, Star và tiến độ đa thiết bị cần hoàn thiện thêm.
- Chưa có vai trò giáo viên, giao bài tập, thông báo đẩy, media cho câu hỏi, hay bộ truyện dài 10–20 chương.
- Tiếng Anh là nội dung chính; các ngôn ngữ khác hiện chỉ là lựa chọn thử nghiệm.
- Trước khi mở công khai, cần rà soát bảo mật, quyền riêng tư, khả năng tiếp cận và nội dung phù hợp lứa tuổi.
