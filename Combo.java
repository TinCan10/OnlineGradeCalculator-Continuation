import java.util.Scanner;
public class Combo{

      public static void main(String[]args)
    {
           double  value; 
           String res;
           double value2;
           double total;
           double total2;
           String ans;
           double weight;
           double weight2;
           
      double  sum = 0.0;    
      char choice;     
      
      Scanner console = new Scanner(System.in);
      do
      {
         System.out.println("Enter category ");
        res = console.next(); 
          System.out.println("Enter weight  ");
        weight = console.nextDouble();
         System.out.println("Enter number of assignments");
        int num = console.nextInt();
        System.out.println("Enter assignment name: ");
          ans= console.next();
         System.out.println("Enter points: ");
         value = console.nextDouble();
         System.out.print("Enter how much points you earned ");
         value2 = console.nextDouble();
         total = (value2 / value)*100;
         weight2=0.0;
         total2=0.0;
        for(int i=0; i < num; i++)
        {
            sum += (weight * total)/ (weight );
        }

         System.out.print("Enter Y to continue or N to end: ");
         choice = console.next().charAt(0);
      }
      while ((choice == 'y') || (choice == 'Y'));
 
      System.out.println("The weighted grade is" + sum);
   }
}