import Product from "../entity/product";
import RepositoryInterface from "../../shared/repository/repository_interface";

export default interface ProductRepositoryInterface extends RepositoryInterface<Product> {}