#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[tauri::command]
fn addition(num1:f64,num2:f64) -> f64 {
  num1+num2
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![addition])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
