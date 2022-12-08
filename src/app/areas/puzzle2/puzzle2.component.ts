import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Direction } from './direction';
import { InstructionModel } from './instruction-model';

@Component({
  selector: 'app-puzzle2',
  templateUrl: './puzzle2.component.html',
  styleUrls: ['./puzzle2.component.scss']
})
export class Puzzle2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.reset();
  }

  @Input()
  public isComplete = false;
  
  @Output()
  correctAnswerProvided = new EventEmitter();

  @Output()
  public close = new EventEmitter(); 

  answer = new FormControl('');

  public displayError = false;

  public correctAnswers = ['cruel'];
  public errorMessage = 'That wasn\'t right. Please try again.';

  public handleCorrectAnswerProvided(): void {
    this.correctAnswerProvided.emit();
  }

  public handleClose(): void {
    this.close.emit();
  }

  private _maxRoomNumber = 15;

  public get isAtEnd(): boolean {
    return this._maxRoomNumber <= this.roomNumber;
  }

  public roomNumber = 1;
  public roomWord = '';
  public roomInstruction = '';
  public isOnCorrectPath = true;

  private _correctInstructions: InstructionModel[] = [
    {
      step: 1,
      word: "FLOOR",
      instruction: "Unless otherwise instructed, go forwards.",
      correctDirection: Direction.Forwards // Step 1 applies, so forwards.
    },
    {
      step: 2,
      word: "SHORT",
      instruction: "For prime numbered rooms, go left.",
      correctDirection: Direction.Left // Step 2 applies, so left 
    },
    {
      step: 3,
      word: "BRASS",
      instruction: "If the word in the current room begins with a vowel, go right.",
      correctDirection: Direction.Left // Step 3 does not apply, so step 2 applies, so left
    },
    {
      step: 4,
      word: "FORCE",
      instruction: "If the word from the previous room ended with S, go left.",
      correctDirection: Direction.Left // Step 4 applies, so left.
    },
    {
      step: 5,
      word: "ERROR",
      instruction: "In room 9, go right. This supersedes any other instructions that might apply (when deciding directions in Room 9 only).",
      correctDirection: Direction.Right // Step 4 does not apply, so step 3, so right.
    },
    {
      step: 6,
      word: "SHARK",
      instruction: "If the word in the current room is a palindrome, go right.",
      correctDirection: Direction.Forwards // Steps 5, 4, 3, 2 do not apply, so step 1, so forwards.
    },
    {
      step: 7,
      word: "FLOSS",
      instruction: "If the word in the current room is a colour, go right.",
      correctDirection: Direction.Left // Steps 6, 5, 4, 3 do not apply, so step 2, so left.
    },
    {
      step: 8,
      word: "TWEET",
      instruction: "In three rooms' time, go right; unless you would have gone right anyway if this instruction did not exist, in which case go left. This supserdes any other instructions that might apply (when deciding directions in that room only).",
      correctDirection: Direction.Left // Steps 7, 6, 5 do not apply, so step 4, so left.
    },
    {
      step: 9,
      word: "ORGAN",
      instruction: "The rule from room 2 no longer applies.",
      correctDirection: Direction.Right // Straight to step 5, so right.
    },
    {
      step: 10,
      word: "SAGAS",
      instruction: "If the current word is an anagram of a word from a previous room, go forwards.",
      correctDirection: Direction.Right // Steps 10, 9, 8, 7 do not apply, so 6, so right.
    },
    {
      step: 11,
      word: "GREEN",
      instruction: "If the room number is a multiple of 6, then go forwards.",
      correctDirection: Direction.Left // Steps 11, 10, 9 do not apply, so 7, so right. Thus 8 applies, so left.
    },
    {
      step: 12,
      word: "TOAST",
      instruction: "If the current word contains the same letter twice in a row, take the direction you took three rooms before that room.",
      correctDirection: Direction.Forwards // Step 12 does not apply, so 11 applies, so forwards.
    },
    {
      step: 13,
      word: "SHEER",
      instruction: "Ignore instructions from any prime numbered rooms before this one.",
      correctDirection: Direction.Right // Step 13 does not apply, step 12 does, so take the direction from step 10, which is right.
    },
    {
      step: 14,
      word: "CLOSE",
      instruction: "If you would fall back to the instruction from room 1 here, instead of going forwards take the direction you've taken most overall so far.",
      correctDirection: Direction.Left // Steps 13, 12, 11x, 10, 9, 8, 7x, 6, 5x, 4, 3x, 2x do not apply, so 1. Direction used most is left.
    },
    {
      step: 15,
      word: "CRUEL",
      instruction: "Congratulations! The word above is the word you're looking for.",
      correctDirection: Direction.Forwards
    }
  ]

  public left(): void {
    this.updateStep(Direction.Left);
  }

  public right(): void {
    this.updateStep(Direction.Right);
  }

  public forwards(): void {
    this.updateStep(Direction.Forwards);
  }

  public reset(): void {
    this.setCorrectStepInstruction(1);
    this.roomNumber = 1;
    this.isOnCorrectPath = true;
  }

  private updateStep(selectedDirection: Direction) {
    if (this.isOnCorrectPath) {
      const currentStep = this.getCorrectStepInstruction(this.roomNumber);
      
      if (currentStep.correctDirection !== selectedDirection) {
        this.isOnCorrectPath = false;
      }
    }

    this.setNextStep();
  }

  private setNextStep() {
    this.roomNumber++;

    if (this.isOnCorrectPath) {
      this.setCorrectStepInstruction(this.roomNumber);
    } else {
      this.setIncorrectStepInstruction();
    }
  }

  private setCorrectStepInstruction(stepNumber: number) {
    const step = this.getCorrectStepInstruction(stepNumber);
    this.roomInstruction = step.instruction;
    this.roomWord = step.word;
  }

  private setIncorrectStepInstruction() {
    if (this.roomNumber === 5 || this.roomNumber === 10 || this.roomNumber === 15) {
      this.roomInstruction = 'You have gone wrong at some point before now. Resetting is highly recommended.'
      this.roomWord = 'WRONG'  
    }
    else {
      this.roomWord = this._randomRoomWords[Math.floor(Math.random() * this._randomRoomWords.length)];
      this.roomInstruction = this._randomRoomInstructions[Math.floor(Math.random() * this._randomRoomInstructions.length)]
    }
  }

  private getCorrectStepInstruction(stepNumber: number): InstructionModel {
    return this._correctInstructions.find(o => o.step === stepNumber);    
  }

  private _randomRoomWords: string[] = ['ABBEY', 'ABBOT', 'AGREE', 'ALTAR', 'ANTIC', 'BACON', 'BADGE', 'BERET', 'BLEED', 'BREAD', 'CAMEL', 'CHESS', 'CLOTH', 'CONDO', 'CRUST', 'DELTA', 'DOUBT', 'DRESS', 'DOZEN', 'DRUID', 'EAGLE', 'ENTRY', 'EQUAL', 'EVENT', 'EXTRA', 'FALSE', 'FIGHT', 'FLAME', 'FOGGY', 'FUDGE', 'GEESE', 'GLORY', 'GRAIN', 'GUARD', 'GUILT', 'HARSH', 'HOBBY', 'HORSE', 'HOTLY', 'HYENA', 'ICING', 'INBOX', 'INNER', 'INTRO', 'ISSUE', 'JAUNT', 'JAZZY', 'JOINT', 'JOIST', 'JUICE', 'KEBAB', 'KIOSK', 'KNACK', 'KNEEL', 'LABEL', 'LEMON', 'LIMIT', 'LIVID', 'LUMPY', 'MANGO', 'MELON', 'MIDST', 'MIRTH', 'MUMMY', 'NAIVE', 'NINJA', 'NOBLE', 'NORTH', 'NUTTY', 'OAKEN', 'OPINE', 'OTHER', 'OUTER', 'OZONE', 'PAINT', 'PATIO', 'PENAL', 'PIANO', 'POINT', 'QUALM', 'QUEEN', 'QUIET', 'RANCH', 'REAPS', 'RECUT', 'RETCH', 'RIPEN', 'ROOST', 'SADLY', 'SENSE', 'SHAWL', 'SIEGE', 'SIEVE', 'SPEAR', 'STRIP', 'TABOO', 'TERSE', 'THUMB', 'TIMID', 'TRULY', 'ULCER', 'ULTRA', 'UNTIL', 'UTTER', 'VAGUE', 'VENUE', 'VIPER', 'VOMIT', 'VOWEL', 'WAFER', 'WHIRL', 'WHITE', 'WORLD', 'WROTE', 'YACHT', 'ZEBRA'];
  private _randomRoomInstructions: string[] = [
    'Go right.',
    'Go left.',
    'Go forwards.',
    'If the word begins with a vowel, go right.',
    'If the room number is even, go left.',
    'If the room number is odd, go right.',
    'If the room number is a multiple of 5, go left.',
    'If the room number is a multiple of 4, go forwards.',
    'If the word contains a Z, go right.',
    'If the word contains a Y, go left.',
    'If the word has more than two vowels, go forwards.',
    'If the word can have an F put in front of it to form a valid six-letter word, go left.',
    "In three rooms' time, go forwards.",
    "In two rooms' time, go right.",
    "If the current word shares three or more letters with the previous word, go left.",
    "If the current word is a food item, go forwards.",
    "If an instruction would make you take the same direction as you took before, then go forwards (even if this was the same direction as before).",
    "If the current word begins with B, go right.",
    "If the current word is an anagram of SPARE, go forwards.",
    "Take the direction you took two rooms ago.",
    "The next time you would go forwards, go right instead.",
    "The next time you would go forwards, go left instead.",
    "The next time you would go left, go forwards instead.",
    "The next time you would go left, go right instead.",
    "The next time you would go right, go forwards instead.",
    "The next time you would go right, go left instead.",
    "If the word contains a V, go right.",
    "Ignore the instruction from two rooms ago.",
    "Regardless of any other instructions, take the first direction mentioned in the instruction from three rooms ago.",
    "No new instruction here.",
    "If the current word represents a noun that's smaller than the average dog, go left.",
    "If the current word contains the letters L, E, F and T in any order, go right.",
    "If the current word has an A but no E, go forwards.",
    "If the current word contains four different consonants, go forwards.",
    "If the current word is a fish, go right.",
    "If you've taken the same direction three times in a row before now, then go right. Otherwise go forwards.",
    "If the current word has three different vowels, go left.",
    "If the current word is an antonym of a previous word, go right.",
    "If the current word is a musical instrument, go forwards.",
    "If the current word comes alphabetically before CELLO, go left",
    "If the current word comes alphabetically after all of the previous three words, go right.",
    "If the current word can be made from the letters in ESCAPEROOM, go forwards.",
    "If the current word is a body part, go left.",
    "If the previous word was alphabetically between LEFT and RIGHT, go forwards.",
    "If the current word is a shape, go left."
  ];
}
