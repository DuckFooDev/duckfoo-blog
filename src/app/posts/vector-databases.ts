import { BlogPost } from "@/types/blog"
import vectorDBImage from "@/assets/vector-database.webp"


export const vectorDatabasesPost: BlogPost = {
    id: 'vector-databases',
    title: 'What is a Vector Database? A Complete Guide (2025)',
    metadata: {
        title: 'What is a Vector Database? A Complete Guide (2025)',
        description: 'Learn everything about vector databases: what they are, how they work, why they matter for AI, and when to use them. Includes examples and history.',
        keywords: [
            'vector database', 'AI search', 'semantic search', 'machine learning',
            'similarity search', 'natural language processing', 'embedding models',
            'pgvector', 'Pinecone', 'Milvus', 'FAISS', 'vector search'
        ],
        author: 'Duckfoo',
        publishedDate: '2025-03-08',
        modifiedDate: '2025-03-08',
        openGraph: {
            title: 'What is a Vector Database? A Complete Guide (2025)',
            description: 'A deep dive into vector databases, embeddings, and AI-powered similarity search. Learn about PostgreSQL pgvector, Pinecone, Milvus, and more.',
            url: 'https://www.duckfoo.dev/blog/vector-databases',
            type: 'article',
            images: [
                {
                    url: vectorDBImage.src,
                    alt: 'Vector database concept illustration',
                    width: 1200,
                    height: 630
                }
            ],
            siteName: 'Duckfoo Blog'
        },
        twitter: {
            card: 'summary_large_image',
            title: 'What is a Vector Database? A Complete Guide (2025)',
            description: 'Everything you need to know about vector databases: how they work, their history, and real-world use cases.',
            image: vectorDBImage.src
        }
    },
    excerpt: 'Learn everything about vector databases: what they are, how they work, why they matter for AI, and when to use them. Includes examples and history.',
    image: vectorDBImage.src,
    likes: 0,
    date: 'March 8, 2025',
    readingTime: '5 min read',
    content: `
# Vector Databases: Understanding the Basics

Vector databases are not new; the first one emerged around 2010 by the company **VectorWise**, but as we all know, in the last few years, their usage has increased steeply.

As always, everything that surrounds **Artificial Intelligence** looks or feels like magic, but it is far from it. In this article, we will go through the basics to easily understand what a vector database is, why they are important, and how you can use them to boost your solutions.

Without further ado, let's dive into it!

---

## In a nutshell
A **vector database** is a way to store your items along with a mathematical representation of that item, called a **vector (or embedding)**. Then, you can check how similar that item is to other items in the database.

---

## Why is that a big deal?
In the past, we've always checked if an item exists in a database by trying to compare or find an exact match of some text with its **title, name, or description**, or even with **tags** to classify our items.

### Why are they useful?
Let's say we own a **pet store**, and I store my cute little puppies looking for a new family under "Puppy" but people search on my website using the word **"Dog"**?

They are not going to find any matches unless I explicitly tag them or add the word in some field to be compared when searching, even when **Puppy** and **Dog** are words that are highly related!

### Hold on...
This doesn't mean searching by an exact match of words is not going to be used anymore; this just gives us more possibilities when building a **website or a product**.

---

## When not to use them?
If we are looking for a **user**, we definitely don't want to be recommended similar users based on how we spelled it; we want the **exact username** we are looking for.

Both methods are useful and used differently to make a **great product**.

### Example: Movie Streaming Platform
Imagine we have a movie streaming platform called... **Metflix**.

- We want our users to find their movies with an **exact word match**.
- We don't want them to look for *"Saw"* and bring up a documentary about someone that saw something one day; we want the **actual movie!**
- But then, after seeing it, we need to **recommend new movies** based on their plots, titles, or even their reviews.
- We can run a **similarity search (using vectors)**, comparing that movie to all other ones and recommending those that are most similar.

---

## How does a Vector Database work?
A **vector** is a mathematical representation of a certain piece of information. Using math, we can calculate the **distance between two vectors**, with closer distances meaning the vectorized information is **semantically more similar**.

If we have products and store a vector along with them based on their **name and description**, we can compare it with **user inputs**, which are also converted to vectors. If the user wants something similar to the information used to store that product's vector, they will be close, and the user will be shown that product.

---

## Vector Databases
There are numerous ways to implement a vector database, whether through indexing, adding a metadata layer, using extensions, or opting for native solutions. Here are some of the options available today:

- **PostgreSQL** with the \`pgvector\` extension - widely used for vector search capabilities.
- **Snowflake** - a cloud-based AI database with its own embedding models.
- **Pinecone** - a native vector database designed and optimized for embeddings.
- **MongoDB** - with vector search indexing.
- **Elasticsearch** - supports vector search through its \`k-NN\` plugin.
- **Faiss** - a library developed by Facebook for efficient similarity search and clustering of dense vectors.
- **Milvus** - an open-source vector database built for scalable similarity search.
- **AWS Neptune** - supports graph and RDF data models with capabilities for handling vector data.

Far from saying that these are the only or best choices, the goal here is to highlight the diverse options available, whether through **extensions, indexing, or native solutions**, to meet various product needs. So go out there and find the one that **best fits your expectations!**

---

## A little bit of history

### **1950s - Bag-of-Words (BoW)**
One of the earliest approaches to creating an **embedding** was using the **bag-of-words (BoW)** concept.

#### Example:
Given the set of words: \`hello, world, house, man\`

- **Document 1:** "My house is the best house in the world" → \`[0, 1, 2, 0]\`
- **Document 2:** "There is a man that lives in a house, he never says hello" → \`[1, 0, 1, 1]\`

This was a simple approach but had issues, as it didn't account for **contextual similarity**.

__

### **1960s - TF-IDF (Term Frequency-Inverse Document Frequency)**
This method measured **word importance** rather than just **presence**.

#### Example:
Documents:
- "The car is really fast"
- "The train is really fast"

Here, "car" and "train" are the most **unique words** to each document.

Even though it was an improvement, **TF-IDF** still couldn't link similar words like "Dog" and "Puppy".

__

### **1990s - Latent Semantic Analysis (LSA)**
LSA introduced the idea that **words appearing in similar contexts might be related**.
It used **Singular Value Decomposition (SVD)** to reduce the matrix size and **capture hidden relationships**.

However, LSA had two major issues:
- **Computationally expensive** (due to large word matrices).
- **Words had fixed vectors**, making them **context-independent**.

__

### **2013 - Word2Vec by Google**
A game-changer! The first **Neural Network-based** embedding model.

Two approaches:
1. **Continuous Bag of Words (CBoW):** Predict missing words from a bag of words.
- Example: "The king wore his ___" → Predict "crown".
2. **Skip-gram:** Predict surrounding words from a given word.
- Example: "The king wore his crown" → Predict "wore" and "crown" from "king".

__


### **2018 - Transformers Era: BERT**
The arrival of **BERT (Bidirectional Encoder Representations from Transformers)** changed everything!
- Instead of focusing on just **one direction**, BERT **looks at both before and after a word**.
- This allows it to capture **full context** dynamically.

Now, we have **embedding models** that can **adapt vectors dynamically based on context**.

---

## Final Thoughts
To sum up with something like a conclusion, **vector databases** are a great way to improve how people interact with our apps. By using **Natural Language Processing (NLP)** and understanding what our clients need, we can **remove friction** between users and technology.

There will come a time when users will be able to interact with technology in the most **human-like way**, without needing to "learn" how to use technology. Instead, **technology will learn how to interact with humans effortlessly**. It is our goal to **make our way to that point**.

---

If you have any doubts, feel free to [Contact us](https://www.duckfoo.dev) to book a meeting.
`,
}