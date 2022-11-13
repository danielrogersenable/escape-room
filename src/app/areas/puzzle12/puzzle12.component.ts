import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Direction } from './direction';
import { InstructionModel } from './instruction-model';

@Component({
  selector: 'app-puzzle12',
  templateUrl: './puzzle12.component.html',
  styleUrls: ['./puzzle12.component.scss']
})
export class Puzzle12Component implements OnInit {

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

  public correctAnswer = 'cruel';
  public errorMessage = 'That wasn\'t right. Please try again.';

  public handleCorrectAnswerProvided(): void {
    this.correctAnswerProvided.emit();
    this.close.emit();
  }

  public handleClose(): void {
    this.close.emit();
  }

  private _maxRoomNumber = 20;

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
      correctDirection: Direction.Forwards
    },
    {
      step: 2,
      word: "SHORT",
      instruction: "For prime numbered steps, go left.",
      correctDirection: Direction.Left
    },
    {
      step: 3,
      word: "BRASS",
      instruction: "If the current word begins with a vowel, go right.",
      correctDirection: Direction.Left
    },
    {
      step: 4,
      word: "FORCE",
      instruction: "If the word from the previous step ended with S, go left.",
      correctDirection: Direction.Left
    },
    {
      step: 5,
      word: "ERROR",
      instruction: "On step 9, go right. This supersedes any other instructions that might apply for that step.",
      correctDirection: Direction.Right
    },
    {
      step: 6,
      word: "SHARK",
      instruction: "If the word is a palindrome, go right.",
      correctDirection: Direction.Forwards
    },
    {
      step: 7,
      word: "FLOSS",
      instruction: "If the word is a colour, go forwards.",
      correctDirection: Direction.Left
    },
    {
      step: 8,
      word: "TWEET",
      instruction: "The next time you need to go forwards, go left instead. (This only applies once)",
      correctDirection: Direction.Left
    },
    {
      step: 9,
      word: "ORGAN",
      instruction: "The rule from step 2 no longer applies.",
      correctDirection: Direction.Right
    },
    {
      step: 10,
      word: "GREEN",
      instruction: "If the step is a multiple of 6, then go forwards.",
      correctDirection: Direction.Left
    },
    {
      step: 11,
      word: "SAGAS",
      instruction: "If the word contains the same letter twice in a row, take the direction you took three steps before that step.",
      correctDirection: Direction.Right
    },
    {
      step: 12,
      word: "HARPS",
      instruction: "If the word begins with L, go left. If the word begins with R, go right. If the word begins with F, go forwards.",
      correctDirection: Direction.Forwards
    },
    {
      step: 13,
      word: "SHEER",
      instruction: "If the word is a compass direction, go right.",
      correctDirection: Direction.Left
    },
    {
      step: 14,
      word: "TOAST",
      instruction: "In four steps' time, go right; unless you would have gone right anyway because of an earlier instruction, in which case go left.",
      correctDirection: Direction.Forwards
    },
    {
      step: 15,
      word: "FLOAT",
      instruction: "Ignore any instructions from prime numbered steps before now.",
      correctDirection: Direction.Forwards
    },
    {
      step: 16,
      word: "SOUTH",
      instruction: "If the word is an animal, go forwards.",
      correctDirection: Direction.Right
    },
    {
      step: 17,
      word: "UNDER",
      instruction: "If all the letters in the word are in alphabetical order, go left.",
      correctDirection: Direction.Forwards
    },
    {
      step: 18,
      word: "KAYAK",
      instruction: "If the word is an anagram of a word from a previous room, go forwards.",
      correctDirection: Direction.Left
    },
    {
      step: 19,
      word: "CLOSE",
      instruction: "If you would fall back to the instruction from step 1 here, instead of going forwards take the direction you've taken least overall so far.",
      correctDirection: Direction.Right
    },
    {
      step: 20,
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
    if (this.roomNumber === 10 || this.roomNumber === 20) {
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

  private _randomRoomWords: string[] = ['ABBEY', 'ABBOT', 'AGREE', 'ALTAR', 'ANTIC', 'BACON', 'BADGE', 'BERET', 'BLEED', 'BREAD', 'CAMEL', 'CHESS', 'CLOTH', 'CONDO', 'CRUST', 'DELTA', 'DOUBT', 'DRESS', 'DOZEN', 'DRUID', 'EAGLE', 'ENTRY', 'EQUAL', 'EVENT', 'EXTRA', 'FALSE', 'FIGHT', 'FLAME', 'FOGGY', 'FUDGE', 'GEESE', 'GLORY', 'GRAIN', 'GUARD', 'GUILT', 'HARSH', 'HOBBY', 'HORSE', 'HOTLY', 'HYENA', 'ICING', 'INBOX', 'INNER', 'INTRO', 'ISSUE', 'JAUNT', 'JAZZY', 'JOINT', 'JOIST', 'JUICE', 'KEBAB', 'KIOSK', 'KNACK', 'KNEEL', 'LABEL', 'LEMON', 'LIMIT', 'LIVID', 'LUMPY', 'MANGO', 'MELON', 'MIDST', 'MIRTH', 'MUMMY', 'NAIVE', 'NINJA', 'NOBLE', 'NORTH', 'NUTTY', 'OAKEN', 'OPINE', 'OTHER', 'OUTER', 'OZONE', 'PAINT', 'PATIO', 'PENAL', 'PIANO', 'POINT', 'QUALM', 'QUEEN', 'QUIET', 'RANCH', 'RECUT', 'RETCH', 'RIPEN', 'ROOST', 'SADLY', 'SENSE', 'SHAWL', 'SIEGE', 'SIEVE', 'STRIP', 'TABOO', 'TERSE', 'THUMB', 'TIMID', 'TRULY', 'ULCER', 'ULTRA', 'UNTIL', 'UTTER', 'VAGUE', 'VENUE', 'VIPER', 'VOMIT', 'VOWEL', 'WAFER', 'WHIRL', 'WHITE', 'WORLD', 'WROTE', 'YACHT', 'ZEBRA'];
  private _randomRoomInstructions: string[] = [
    'Go right.',
    'Go left.',
    'Go forwards.',
    'If the word begins with a vowel, go right.',
    'If the step number is even, go left.',
    'If the step number is odd, go right.',
    'If the step number is a multiple of 5, go left.',
    'If the step number is a multiple of 4, go forwards.',
    'If the word contains a Z, go right.',
    'If the word contains a Y, go left.',
    'If the word has more than two vowels, go forwards.',
    'If the word can have an F put in front of it to form a valid six-letter word, go left.',
    'In three steps time, go forwards.',
    "In two steps' time, go right.",
    "If the word shares three or more letters with the previous word, go left.",
    "If the word is a food item, go forwards.",
    "If an instruction would make you take the same direction as you took before, then go forwards (even if this was the same direction as before).",
    "If the word begins with B, go right.",
    "If the word is an anagram of SPARE, go forwards.",
    "Take the direction you took two steps ago.",
    "The next time you would go forwards, go right instead.",
    "The next time you would go forwards, go left instead.",
    "The next time you would go left, go forwards instead.",
    "The next time you would go left, go right instead.",
    "The next time you would go right, go forwards instead.",
    "The next time you would go right, go left instead.",
    "If the word contains a V, go right.",
    "Ignore the instruction from two steps ago.",
    "Regardless of any other instructions, take the first direction mentioned in the instruction from three steps ago.",
    "No new instruction here.",
    "If the word represents a noun that's smaller than the average dog, go left.",
    "If the word contains the letters L, E, F and T in any order, go right.",
    "If the word has an A but no E, go forwards.",
    "If the word contains four different consonants, go forwards.",
    "If the word is a fish, go right.",
    "If you've taken the same direction three times in a row before now, then go right. Otherwise go forwards.",
    "If the word has three different vowels, go left.",
    "If the word is an antonym of a previous word, go right.",
    "If the word is a musical instrument, go forwards.",
    "If the word comes alphabetically before CELLO, go left",
    "If this word comes alphabetically after all of the previous three words, go right.",
    "If the word can be made from the letters in ESCAPEROOM, go forwards.",
    "If the word is a body part, go left.",
    "If the previous word was alphabetically between LEFT and RIGHT, go forwards.",
    "If the word is a shape, go left."
  ];
}
