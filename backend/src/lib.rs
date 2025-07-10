use candid::{candid_method};
use std::cell::RefCell;

thread_local! {
    static FILE_STORAGE: RefCell<Option<Vec<u8>>> = RefCell::new(None);
}

#[ic_cdk::update]
#[candid_method(update)]
fn upload_file(data: Vec<u8>) {
    let data_len = data.len();
    FILE_STORAGE.with(|f| *f.borrow_mut() = Some(data.clone()));
    ic_cdk::println!("File uploaded! Size: {}", data_len);
}

#[ic_cdk::query]
#[candid_method(query)]
fn get_file() -> Option<Vec<u8>> {
    FILE_STORAGE.with(|f| f.borrow().clone())
}
