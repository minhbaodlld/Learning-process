#include <iostream>

using namespace std;

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









