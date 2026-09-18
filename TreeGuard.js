/**
 * TreeGuard - BST Integrity Validator
 * ----------------------------------
 * A lightweight validation library that verifies whether a hierarchical
 * binary tree satisfies Binary Search Tree (BST) integrity rules.
 */

/**
 * Represents a node inside a binary tree.
 */
class TreeNode {
    /**
     * @param {number} value
     * @param {TreeNode|null} left
     * @param {TreeNode|null} right
     */
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

/**
 * Provides multiple algorithms for validating Binary Search Trees.
 */
class BstValidator {

    /**
     * Validate using recursive boundary propagation.
     *
     * @param {TreeNode|null} root
     * @returns {boolean}
     */
    static validateUsingRange(root) {

        function validate(node, minimumAllowed, maximumAllowed) {

            if (node === null) {
                return true;
            }

            if (
                (minimumAllowed !== null && node.value <= minimumAllowed) ||
                (maximumAllowed !== null && node.value >= maximumAllowed)
            ) {
                return false;
            }

            return (
                validate(node.left, minimumAllowed, node.value) &&
                validate(node.right, node.value, maximumAllowed)
            );
        }

        return validate(root, null, null);
    }

    /**
     * Validate using in-order traversal.
     *
     * Since a valid BST produces a strictly increasing
     * sequence during in-order traversal, any ordering
     * violation immediately invalidates the tree.
     *
     * @param {TreeNode|null} root
     * @returns {boolean}
     */
    static validateUsingInOrder(root) {

        let previousValue = null;
        let valid = true;

        function traverse(node) {

            if (node === null || !valid) {
                return;
            }

            traverse(node.left);

            if (previousValue !== null && node.value <= previousValue) {
                valid = false;
                return;
            }

            previousValue = node.value;

            traverse(node.right);
        }

        traverse(root);

        return valid;
    }
}

module.exports = {
    TreeNode,
    BstValidator
};
