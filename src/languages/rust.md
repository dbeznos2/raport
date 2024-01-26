![](/home/dmytro/jobtrek/raport/src/images/rust-white.jpg)
<br />

**Rust** - strict, systems-level programming language designed for building reliable and high-performance software. Its unique ownership system ensures memory safety and concurrency without sacrificing speed, making it ideal for projects where both security and performance are important. See more in their [documentation](https://www.rust-lang.org/).

## Code exemple:

```rust
fn main() {
    let x: i32 = 5;
    let y = 10;
    let mut z: f64 = 3.14;
    z = 2.71;
    let wassup = String::from("Hello, Rust!");

    println!("x: {}", x);
    println!("y: {}", y);
    println!("z: {}", z);
    println!("message: {}", wassup);
}
```

<br />
<br />
<br />

# Who use Rust

- Microsoft
- Facebook
- Dropbox
- Mozilla

<br />
<br />

# My projects in Rust

- [Todo list](/home/dmytro/jobtrek/raport/src/projects/rust-todo.md)

This todo list coded in Rust and it runs from command line. What you can do is by typing 'A', the application showcases all archived todos, allowing you to reminisce or manage them further. To return to the primary view, just press 'Q'. If you're ready to add a new todo and continue your productive journey, type 'N'. The application prompts you to enter the details of your new task, and once added, presents the updated list of todos.
