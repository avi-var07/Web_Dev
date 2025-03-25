//Various Exceptions

class Main{
    static void Arithmetic(){
        try{
            System.out.println(20/0);
        }
        catch(Exception e){
            System.out.println("Exception occured!"+e);
        }
        System.out.println("Kyu kiya 0 se divide? hein? baat smjh nhi aati ek baar mei??aagya na exception!");
    }
    static void arrayIndex(){
        try{
            int arr[]={1,2,3,4};
            System.out.println(arr[10]);
        }
        catch(Exception e){
            System.out.println("Exception occured!"+e);
        }
        System.out.println("Mana kiya tha n array ki length se jyada ya usk barabar index access nhi krna, phir bhi kiya?kyu????? i want answer! index out of bound exception aagyaa n!!");
    }
    static void nullPointer(){
        try{
            String s = null;
            System.out.println(s.length());
        }
        catch(Exception e){
            System.out.println("Exception occured!"+e);
        }
        System.out.println("jab string null define kar rha hai to length kaise dega?? hein?? bta na?? bata bata!! bol!!!!? ab aagya n exception null pointer exception!!");
    }
    public static void main(String[] args) {
        Arithmetic();
        arrayIndex();
        nullPointer();
    }
}
//Damn!