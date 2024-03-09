



//TokenRepo 확장
class localstorageCreateStu{
    STUDENT_AGREE = 'STUDENT_AGREE';
    setStudentAgree(){
        localStorage.setItem(this.STUDENT_AGREE, 'true');
    }
    getStudentAgree(){
        return localStorage.getItem(this.STUDENT_AGREE);
    }
    removeStudentAgree(){
        localStorage.removeItem(this.STUDENT_AGREE);
    }


}

const LocalStoragePopup = new localstorageCreateStu()
export default LocalStoragePopup;