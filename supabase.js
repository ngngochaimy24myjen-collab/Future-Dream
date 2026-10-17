/*
 * Cấu hình Supabase cho Future-Dream.
 * Điền Project URL và PUBLIC publishable key (sb_publishable_...) từ Supabase Dashboard.
 * KHÔNG BAO GIỜ đưa service_role hoặc secret key vào mã nguồn công khai.
 * Để trống hai giá trị này nếu muốn dùng chế độ demo localStorage.
 */
window.FD_SUPABASE_URL = "";
window.FD_SUPABASE_PUBLISHABLE_KEY = "";
(function () {
  const url = window.FD_SUPABASE_URL, key = window.FD_SUPABASE_PUBLISHABLE_KEY;
  window.fdSupabase = null;
  if (window.supabase && url && key) {
    try { window.fdSupabase = window.supabase.createClient(url, key, {auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}}); }
    catch (e) { console.error("Future-Dream: không khởi tạo được Supabase.", e); }
  }
})();
