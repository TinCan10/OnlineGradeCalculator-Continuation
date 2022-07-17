import java.util.Scanner;
public class Points{

      public static void main(String[]args)
    {
           double  value; 
           double value2;
           double total;
           
      int  sum = 0;    
      char choice;     
      
      Scanner console = new Scanner(System.in);
      do
      {
        
         System.out.print("Enter points: ");
         value = console.nextDouble();
         System.out.print("Enter how much points you earned ");
         value2 = console.nextDouble();

         total = (value2 / value)*100;

         System.out.print("Enter Y to continue or N to end: ");
         choice = console.next().charAt(0);
      }
      while ((choice == 'y') || (choice == 'Y'));
 
      System.out.println("Percentage for the assignment " + total+"%");
   }
}