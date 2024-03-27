import java.util.Scanner;

public class TwitterTowers {

	public static void main(String[] args) {
		
		Scanner in=new Scanner(System.in);
		System.out.println("To choose rectangle press 1, to choose treangle press 2 to finish press 3");
		int choose=in.nextInt();
		if(choose==1 || choose==2)
		{
			System.out.println("Enter the height:");
			int height=in.nextInt();
			while(height<2)
			{
				System.out.println("Height has to be grater then 1");
				height=in.nextInt();
			}
			System.out.println("Enter the width");
			int width=in.nextInt();
			if(choose==1)
			{
				if(height==width || Math.abs(width-height)>5)
					System.out.println("Area: "+height*width);
				else
					System.out.println("perimeter: "+2*height+2*width);
			}
			else
				if(choose==2)
				{
					System.out.println("To get the perimeter press 1, to print the treangle press 2");
					int select=in.nextInt();
					if(select==1)
					{
						double side=Math.sqrt(Math.pow((double)width,2)+Math.pow(width/2.0,2));
						System.out.println("perimeter: "+(side*2)+width);
					}
					else
						if(select==2)
						{
							if(width%2==0 || width/2.0>height)
							{
								System.out.println("this treangle is not printable");
							}
							else
							{
								int spaces=width/2;
								int div=(width-2)/2;
								if(div==0)
									div=1;
								int lines=height-2;
								for(int i=0; i<spaces; i++)
									System.out.print(" ");
								
								System.out.print("*");
								System.out.println();
								spaces--;
								//reminder
								for(int j=0; j<lines%div; j++)
								{
									for(int i=0; i<spaces; i++)
										System.out.print(" ");
									System.out.print("***");
									System.out.println();
								}
								int num=3;
								for(int j=0; j<div; j++)
								{
									for(int k=0; k<lines/div; k++)
									{
										for(int i=0; i<spaces; i++)
											System.out.print(" ");
										for(int l=0; l<num; l++)
											System.out.print("*");
										System.out.println();
									}
									num+=2;
									spaces--;
								}
								for(int i=0; i<width; i++)
									System.out.print("*");
									
							}
						}
				}
		}

	}

}
