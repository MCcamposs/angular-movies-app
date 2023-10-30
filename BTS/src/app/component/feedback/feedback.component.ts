import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/data/model/Feedback';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validateEventsArray } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
/*   feedback: Feedback = new Feedback('','',8,'','');*/
  feedbackForm!: FormGroup;

  constructor(){
    
  }
  ngOnInit(): void {
    /* Para validar */
    this.feedbackForm = new FormGroup({
      emailAddress: new FormControl ('', [Validators.required, Validators.email]),
      phoneNumber:new FormControl ('', [Validators.pattern('[0-9]{4}-[0-9]{4}')]),
      rate: new FormControl (8, [Validators.min(0), Validators.max(10)]),
      feedbackTitle:new FormControl('', [Validators.required]),
      Feedback:new FormControl ('', [Validators.required]),
    })
  }

  SubmitFeedback(){
    //Add code
    console.log('Feedback form [submit] -', this.feedbackForm.value)
  }
  
  
}
