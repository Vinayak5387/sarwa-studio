import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  serverTimestamp,
  DocumentData
} from 'firebase/firestore';

// Add a document to a collection
export const addDocument = async (collectionName: string, data: any) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp()
    });
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

// Get all documents from a collection
export const getDocuments = async (collectionName: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error;
  }
};

// Get a single document by ID
export const getDocumentById = async (collectionName: string, docId: string) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    throw error;
  }
};

// Update a document
export const updateDocument = async (collectionName: string, docId: string, data: any) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp()
    });
    return { id: docId, ...data };
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
};

// Delete a document
export const deleteDocument = async (collectionName: string, docId: string) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
};

// Query documents with filters
export const queryDocuments = async (
  collectionName: string, 
  conditions: { field: string; operator: string; value: any }[] = [],
  orderByField?: string,
  orderDirection?: 'asc' | 'desc',
  limitCount?: number
) => {
  try {
    // Initialize as Query type instead of CollectionReference
    let q = query(collection(db, collectionName));
    
    // Apply where conditions
    if (conditions.length > 0) {
      conditions.forEach(condition => {
        q = query(q, where(condition.field, condition.operator as any, condition.value));
      });
    }
    
    // Apply orderBy
    if (orderByField) {
      q = query(q, orderBy(orderByField, orderDirection || 'asc'));
    }
    
    // Apply limit
    if (limitCount) {
      q = query(q, limit(limitCount));
    }
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error querying documents: ", error);
    throw error;
  }
};