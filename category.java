import java.util.Scanner;
public class category{

      public static void main(String[]args)
    {
           String  value; 
           String value2;
           double total;
           
      int  sum = 0;    
      char choice;     
      
      Scanner console = new Scanner(System.in);
      do
      {
         System.out.println("Enter category ");
         value = console.next(); 
      
         System.out.print("Enter Y to continue or N to end: ");
         choice = console.next().charAt(0);
      }
      while ((choice == 'y') || (choice == 'Y'));
 
      System.out.println(value);
   }
}