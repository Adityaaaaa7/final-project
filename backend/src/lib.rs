use ic_cdk::api::stable::StableWriter;
use ic_cdk_macros::*;
use std::collections::HashMap;

static mut FILES: Option<HashMap<String, Vec<u8>>> = None;

#[init]
fn init() {
    unsafe { FILES = Some(HashMap::new()) }
}

#[update]
fn upload_file(name: String, data: Vec<u8>) {
    unsafe {
        if let Some(files) = FILES.as_mut() {
            files.insert(name, data);
        }
    }
}

#[query]
fn get_file(name: String) -> Option<Vec<u8>> {
    unsafe {
        FILES.as_ref()?.get(&name).cloned()
    }
}
