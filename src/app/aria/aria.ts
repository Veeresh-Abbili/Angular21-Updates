import { AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent } from '@angular/aria/accordion';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aria',
  imports: [
  AccordionGroup,
  AccordionTrigger,
  AccordionPanel,
  AccordionContent,],
  templateUrl: './aria.html',
  styleUrl: './aria.css',
})
export class Aria {}
