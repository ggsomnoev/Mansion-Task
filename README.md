"# Mansion-Task"

##############################################################################
1) Please write a class structure (in the language of your choosing, such as: C#, JAVA, JavaScript, PHP) that describes the following objects and their properties/functions.
·	Dolphin
  o	Age (property)
  o	Sleep (function that prints ‘Zzzzzzz’)
  o	Swim (function that prints ‘Splah’)
  o	Eat (function that prints ‘Num num num’)
·	Lion
  o	Age (property)
  o	Sleep (function that prints ‘Zzzzzzz’)
  o	Roar (function that prints ‘Rahhhh!’)
  o	Attack (function that prints ‘POW!’)
  o	Eat (function that prints ‘Num num num)
·	Eagle
  o	Age (property)
  o	Sleep (function that prints ‘Zzzzzzz’)
  o	Fly (function that prints ‘whoo Hooo!’)
  o	Attack (function that prints ‘POW!’)
  o	Eat (function that prints ‘Num num num)
·	Bee
  o	Age (property)
  o	Sleep (function that prints ‘Zzzzzzz’)
  o	Fly (function that prints ‘Whoo Hooo!’)
  o	Eat (function that prints ‘Num num num)

public class Animal {
    public int Age { get; set;}
    public void Sleep()
    {
        Console.WriteLine("Zzzzzz");
    }
    public void Eat()
    {
        Console.WriteLine("Nom Nom NOm");
    }
}

public class Dolphin : Animal {
    public void Swim()
    {
        Console.WriteLine("Splah");
    }  
}
public class Bee : Animal {
    public void Fly()
    {
        Console.WriteLine("whoo Hoo!");
    }  
}
public class Eagle : Bee {
    public void Attack()
    {
        Console.WriteLine("Pow!");
    }  
}

public class Lion : Animal {
    public void Roar()
    {
        Console.WriteLine("Rahhr");
    }  
    public void Attack()
    {
        Console.WriteLine("Pow!");
    }  
}

##############################################################################
2) Asset Loading
1.	Describe in your own words the differences between Pre-loading and Lazy-loading.
2.	What are the advantages and disadvantages of each approach?
3.	In what cases is one better than the other?
4.	Is there a better approach than the two? If so, describe it, along with its advantages and disadvantages.

1. Load all modules in the beginning vs load as few as possible only when needed.
2., 3. 
   Pre-loading 
    + Interacting and routing the application is as fast as possible, since the views are already loaded onto the client. 
    - Big initial download and loading
   Lazy-loading:
    + Small initial download
    - Wait up time switching between components(getting the new data required for that new component)
4. With both working together, we got both side benefits!
  + Small initial page load, so the user can start interacting as quickly as possible.
  + Fast navigation and interaction, since the rest of the application is loaded to the client once the browser detects inactivity.
  

