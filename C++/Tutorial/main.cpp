#include <iostream>

using namespace std;

int main()
{
    cout <<"   /|"<< endl;
    cout <<"  / |"<< endl;
    cout <<" /  |"<< endl;
    cout <<"/___|"<< endl;
    return 0;
}

{
   string characterName = "John";
    int characterAge = 35;
    cout <<"There was a man named "<<characterName<< endl;
    cout <<"He was "<< characterAge<<" years old"<< endl;

    characterName = "Mike";

    cout <<"He like the name "<<characterName<< endl;
    cout <<"But he doens't like being "<<characterAge<< endl;
    return 0;
    return 0;
}


{
    string phrase = "Giraffe Academy";
    cout <<phrase.length();
    cout <<phrase[0];
    phrase[0] ="B";
    cout << phrase;
    cout << phrase.find("Academy", 0);
    string phrasesub;
    phrasesub = phrase.substr(8,3);
    cout << phrasesub;
}


{
    int age;
    cout << "Enter your age: ";
    cin >> age;
    cout << "you are "<< age<< " years old";

    string name;
    cout << "Enter your name: ";
    getline(cin, name);
    cout <<"Hello "<<name;
    return 0;

}

{
   int num1, num2;
   cout << "Enter first number: ";
   cin >> num1;

   count << "Enter second number";
   cin >> num2;

   cout << num1+num2;
   return 0;

}

{
    string color, pluralnoun, celebrity;
   cout << "enter a color: ";
   getline(cin, color);
   cout << "enter a plural noun: ";
   getline(cin, pluralnoun);
   cout << "enter a celebrity: ";
   getline(cin, celebrity);


   cout<< "Roses are "<<color<<endl;
   cout<< pluralnoun <<" are blue"<< endl;
   cout<< "I love "<< celebrity<<endl;
   return 0;
}


int main()
{
    int luckyNums[]={4, 8, 15, 28, 42 };
    int luckyNums2[20] = {}
    cout<<luckyNums[0];
    return 0;
}

void sayHi(string name, int age){
    cout<< "Hello "<<name<< " you're "<<age;
}

int main()
{
    sayHi("Max", 30);
    return 0;
}



double cube(double num){
    return num* num* num;
}

int main()
{
    cout<<cube(5.0);
    return 0;
}



int main()
{
   bool isMale = false;
   bool isTall = true;
   if(isMale && isTall){
        cout<< "You are a tale male";
    }else if(isMale && !isTall){
        cout<< "You are a short male";
    }else if(!isMale && isTall){
        cout<< "You are tall but not a male";
    }else
        cout<< "You are not tall and not a male";
    return 0;
}



int getMax(int num1, int num2, int num3){
    int result;

    if(num1>=num2 && num1>=num3){
        result = num1;
    }else if(num2>=num1 && num2>=num3){
        result = num2;
    }else{
        result=num3;
    }
    return result;
}
int main()
{
   cout<<getMax(10,10,2);
   return 0;
}

{
int num1,num2;
   char op;
   cout<<" Enter first number: ";
   cin>>num1;
   cout<<"Enter operator: ";
   cin>>op;
   cout<<"Enter second number: ";
   cin>>num2;
   int result;
   if(op == '+'){
    result = num1 + num2;
    }else if(op == '-'){
        result = num1 - num2;
    }else if(op == '*'){
        result = num1 * num2;
    }
    else if(op == '/'){
        result = num1 / num2;
    }else{
        cout<<"Invalid operator";
   }
   cout<<result;
   return 0;
}

{
string getDay(int dayNum){
    string dayName;
        switch(dayNum){
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Fridday";
            break;
        case 6:
            dayName = "Saturdayday";
            break;
        default:
            dayName = "Invalid Day Number";
        }
    return dayName;
}

//WHILE LOOP
int main()
{
    cout<<getDay(10);
    return 0;
}
    int index = 1;
    while(index <= 5){
        cout<<index<<endl;
        index++;
    }
    do{
        cout<<index<<endl;
        index++;
    }while(index <=5);

    return 0;
}



int main()
{
   int secretNum = 7;
   int guess;
   do{
        cout<<"Enter your guess: ";
        cin>> guess;
   }while(guess != secretNum);
   cout<<"you win";

    return 0;
}



{
   int secretNum = 7;
   int guess;
   int guessCount = 0;
   int guessLimit = 3;
   bool outOfGuess = false;
   while(secretNum!= guess && !outOfGuess){
        if(guessCount < guessLimit){
            cout<<"Enter guess: ";
            cin>> guess;
            guessCount ++;
        }else{
            outOfGuess = true;
        }
   }
   if(outOfGuess){
        cout<<"you lose";
   }else{
        cout<<"you win";
   }
    return 0;
}

//FOR LOOP
{
    int num[] = {1, 2, 3, 5, 10};
    for (int i = 0; i < 5; i++){
        cout<< num[i] <<endl;
    }
     return 0;
}


//POWER FOR LOOP
int power(int baseNum, int powNum){
        int result = 1;
        for(int i=0; i < powNum; i++ ){
            result = result * baseNum;
        }
        return result;
    }
int main()
{
    cout<<power(5,3);
    return 0;
}


//NESTED FOR LOOP AND 2D ARRAY
int main()
{
    int numberGrid[3][2]= {
                            {1,2},
                            {3,4},
                            {5,6}
                        };
    cout<<numberGrid[0][1]<<endl;
    for(int i =0; i<3; i++){
        for(int j=0; j<2; j++){
            cout<<numberGrid[i][j];
            }
            cout<<endl;
    }
    return 0;
}


//POINTER
int main()
{
    int age = 19;
    int *pAge = &age;
    double gpa = 2.7;
    double *pGpa = &gpa;
    string name = "Mike";
    string *pName = &name;
    cout<<&age<<endl;
    cout<<pAge<<endl;
    cout<<*pAge<<endl;

    return 0;
}



//CLASS AND OBJECT
class Book {
    public:
        string title;
        string author;
        int pages;
//CONSTRUCTOR
        Book(){
            title = "no title";
            author = "no author";
            pages = 0;
        }
        Book(string aTitle, string aAuthor, int aPages){
            title = aTitle;
            author = aAuthor;
            pages = aPages;
        }

};
int main()
{
    Book book1("Harry Porter", "JK Rowling", 500);
    Book book2("Lord of the Rings", "Tolkein", 700);
    Book book3;
    cout<<book1.title<<endl;
    cout<<book3.title;

    return 0;
}


class Student {
    public:
        string name;
        string major;
        double gpa;
        Student(string aName, string aMajor, double aGpa){
            name = aName;
            major = aMajor;
            gpa = aGpa;
        }
//OBJECT FUNCTION
        bool hasHonors(){
            if(gpa>=3.5){
                return true;
            }
            return false;
        }
};
int main()
{
    Student student1("Jim", "Business", 2.4);
    Student student2("Pam", "Art", 3.6);
    cout<<student1.hasHonors();
    return 0;
}


//GETTERS AND SETTERS
class Movie {
    private:
        string rating;
    public:
        string  title;
        string  director;
        Movie(string aTitle, string aDirector, string aRating){
            title = aTitle;
            director = aDirector;
            setRating(aRating);
        }
        //set availlable rating
        void setRating(string aRating){
           if(aRating == "G" || aRating == "PG" ||
              aRating =="PG-13" || aRating =="R" || aRating =="NR"){
                rating = aRating;
              }else{rating = "NR";}
        };
        //get rating even though it's private
        string getRating(){return rating;}
};

int main()
{
    Movie avengers("The Avengers", "Joss Whedon", "PG-13");

    avengers.setRating("dog");
    cout<<avengers.getRating();

    return 0;
}


//INHERITANCE
class Chef {  //Chef superclass
    public:
        void makeChicken(){
            cout<<"The Chef makes chicken"<<endl;
        }
        void makeSalad(){
            cout<<"The Chef makes salad"<<endl;
        }
        void makeSpecialDish(){
            cout<<"The Chef makes BBQ ribs"<<endl;
        }

};

class ItalianChef : public Chef{   //ItalianChef subclass
    public:
        void makePasta(){
            cout<<"The Chef make pasta"<<endl;
        }
        //Overwrite function
        void makeSpecialDish(){
            cout<<"The Chef makes chicken parm"<<endl;
        }
};
int main()
{
    Chef chef;
    chef.makeChicken();
    chef.makeSpecialDish();
    ItalianChef italianchef;
    italianchef.makePasta();
    italianchef.makeSpecialDish();

    return 0;
}

