import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
const URL = 'http://localhost:8081/api/upload';
@Component({
    selector: 'app-add-devis-modal',
    templateUrl: './add-devis-modal.component.html',
    styleUrls: ['./add-devis-modal.component.css']
})


export class AddDevisModalComponent implements OnInit {

    constructor(private http: Http, private el: ElementRef) { }
    @Input() selectedPanne: any;
    ngOnInit() {
    }



    uploadedFiles: any[] = [];

    //the function which handles the file upload without using a plugin.
    upload() {
        //locate the file element meant for the file upload.
        let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
        //get the total amount of files attached to the file input.
        let fileCount: number = inputEl.files.length;
        //create a new fromdata instance
        let formData = new FormData();
        //check if the filecount is greater than zero, to be sure a file was selected.
        if (fileCount > 0) { // a file was selected
            //append the key name 'photo' with the first file in the element
            formData.append('photo', inputEl.files.item(0));
            //call the angular http method
            alert("khaled"+formData);
           /* this.http
                //post the form data to the url defined above and map the response. Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
                .post(URL, formData).map((res: Response) => res.json()).subscribe(
                //map the success function and alert the response
              (success) => {
                    alert(success._body);
                },
                (error) => alert(error))*/
        }
    }

}
