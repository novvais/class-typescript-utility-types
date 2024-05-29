// Exclude<unionType, excludedMembers>

type Ex = Exclude<"a" | "b" | "c", "a" | "b">;
// "c"; 

type Ex1 = Exclude<boolean | string | number, number>
// string and boolean;

// Extract<type, union> 

type Ex2 = Extract<"a" | "b" | "c", "a" | "b">;
// "a" and "b";

type Ex3 = Extract<number | number[], number>
// number;