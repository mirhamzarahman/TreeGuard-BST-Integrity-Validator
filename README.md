# 🌳 TreeGuard-BST-Integrity-Validator

A lightweight JavaScript library that validates hierarchical search-tree structures using two independent verification strategies. It helps ensure structural integrity, ordering consistency, and logical correctness of binary search tree (BST) based systems.

---

# 📖 Project Overview

TreeGuard-BST-Integrity-Validator demonstrates how recursive algorithms can be used to verify the integrity of hierarchical datasets.

Instead of focusing on a specific application, this project presents a reusable validation engine capable of checking whether a binary tree satisfies Binary Search Tree (BST) rules through two independent verification methods.

The project highlights recursion, tree traversal, recursive boundary propagation, and hierarchical validation techniques commonly used in software systems.

---

# 🌍 Real-World Conceptual Scenario

Imagine an organization stores hierarchical indexes for products, customers, or files.

Before performing fast search operations, the system must ensure the hierarchy has not become corrupted.

TreeGuard acts as an integrity verification layer that validates the entire structure before it is trusted by other services.

Example applications include:

- 📂 File indexing systems
- 📊 Analytics engines
- 🗄 Database indexing
- 🔍 Search engines
- ☁ Cloud storage metadata
- 📦 Inventory management systems

---

# 💡 Core Concept

A Binary Search Tree follows these rules:

- Every left child contains a smaller value.
- Every right child contains a larger value.
- Every subtree must also satisfy the same rules.

TreeGuard verifies these rules using two independent algorithms:

1. Recursive Boundary Validation
2. In-Order Monotonic Validation

Both should produce identical validation results.

---

# ⚙️ How the System Works

## Method 1 — Boundary Validation

Each node inherits an allowable value range from its ancestors.

For every node:

- Verify the value is inside its allowed range.
- Update the maximum boundary for the left subtree.
- Update the minimum boundary for the right subtree.
- Continue recursively.

---

## Method 2 — In-Order Verification

A valid BST produces a strictly increasing sequence during in-order traversal.

Process:

1. Traverse left subtree.
2. Visit current node.
3. Compare current value with previous value.
4. Traverse right subtree.

If any value is not strictly larger than the previous one, the tree is invalid.

---

# 🧠 Algorithm / Data Structure Used

| Component | Purpose |
|-----------|----------|
| Binary Tree | Hierarchical data representation |
| Binary Search Tree | Ordered hierarchy |
| Depth-First Search | Recursive traversal |
| Recursion | Tree exploration |
| Boundary Propagation | Constraint validation |
| In-Order Traversal | Ordering verification |

---

# 🔄 Step-by-Step Logic

## Boundary Algorithm

1. Start from the root.
2. Maintain minimum and maximum allowed values.
3. Verify current node.
4. Validate left subtree.
5. Validate right subtree.
6. Return true only if every subtree is valid.

---

## In-Order Algorithm

1. Traverse left subtree.
2. Visit current node.
3. Compare with previous node.
4. Detect ordering violations.
5. Continue traversal.
6. Return validation result.

---

# ✨ Key Features

- ✅ Dual validation strategies
- ✅ Recursive implementation
- ✅ Efficient DFS traversal
- ✅ Strict ordering verification
- ✅ Clean object-oriented design
- ✅ Easy to integrate
- ✅ Educational implementation
- ✅ Lightweight JavaScript module

---

# 📌 Example Use Case

```javascript
const { TreeNode, BstValidator } = require("./TreeGuard");

const tree =
    new TreeNode(
        10,
        new TreeNode(5),
        new TreeNode(20)
    );

console.log(BstValidator.validateUsingRange(tree));
console.log(BstValidator.validateUsingInOrder(tree));
```

Output

```text
true
true
```

---

# 📥 Example Input

```text
        8
      /   \
     3     10
    / \      \
   1   6      14
```

# 📤 Output

```text
Tree is valid.
```

---

# ⏱ Complexity Analysis

| Algorithm | Time | Space |
|-----------|------|-------|
| Boundary Validation | O(N) | O(H) |
| In-Order Validation | O(N) | O(H) |

Where:

- **N** = Number of nodes
- **H** = Height of the tree

---

# 💻 Technologies Used

- JavaScript (ES6+)
- Node.js
- Object-Oriented Programming
- Recursion
- Depth-First Search

---

# 📁 Project Structure

```text
TreeGuard-BST-Integrity-Validator/
│
├── TreeGuard.js
├── README.md
├── LICENSE
└── package.json
```

---

# 🚀 How to Run the Project

Clone the repository

```bash
git clone https://github.com/mirhamzarahman/TreeGuard-BST-Integrity-Validator.git
```

Move into the project

```bash
cd TreeGuard-BST-Integrity-Validator
```

Run your application

```bash
node TreeGuard.js
```

---

# 🎯 Learning Outcomes

After exploring this project you will understand:

- Recursive tree algorithms
- Binary Search Tree properties
- In-order traversal
- Depth-First Search
- Recursive boundary propagation
- Object-oriented JavaScript
- Tree integrity validation
- Algorithm design for hierarchical data

---

# 🚀 Possible Future Improvements

- Iterative validation implementation
- Generic comparable object support
- Visualization of validation process
- Tree serialization utilities
- Tree repair suggestions
- Performance benchmarking
- TypeScript version
- NPM package publishing

---

# 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, consider giving the repository a star!
