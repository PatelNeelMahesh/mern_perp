Certainly, creating a pull request (PR) on GitHub for the "codinggita/project_name" repository and following a review process is a crucial part of contributing to your project.

Certainly, you can create a pull request directly from your main branch without creating a separate feature branch if that's the workflow you prefer. Here are the modified steps:

**Step 1: Fork the Repository**

1. Go to the "codinggita/project_name" repository on GitHub (replace "project_name" with the actual name of the repository).

2. Click the "Fork" button in the upper-right corner of the page. This will create a copy (fork) of the repository in your GitHub account.

**Step 2: Clone Your Fork**

3. On your forked repository, click the "Code" button, and you'll see a URL. Copy the URL (e.g., `https://github.com/your-username/project_name.git`).

4. Open your terminal or command prompt.

5. Use the `git clone` command to clone the forked repository to your local machine:
   ```
   git clone https://github.com/your-username/project_name.git
   ```

**Step 3: Make and Commit Changes**

6. Make your changes to the code using your preferred code editor.

7. After making changes, stage them for commit:

   ```
   git add .
   ```

8. Commit your changes with a descriptive message:
   ```
   git commit -m "Add a new feature"
   ```

**Step 4: Push Changes to Your Fork**

9. Push your changes to your forked repository on GitHub:

```
git push origin main
```

**Step 5: Create a Pull Request**

10. Visit your forked repository on GitHub (e.g., `https://github.com/your-username/project_name`).

11. You should see a banner with a "Compare & pull request" button. Click it.

12. Review your changes on the Compare page.

13. If everything looks good, click the "Create pull request" button.

**Step 6: Submit the Pull Request**

14. Add a title and description for your pull request, explaining the changes you made.

15. Include the note in your pull request description add images/gif for the changes made

16. Review and double-check all the details.

17. Finally, click the "Create pull request" button to submit your PR.

**Step 7: Wait for Review and Merge**

18. Your pull request is now submitted to the original repository. Other contributors will review your changes and provide feedback.

19. If they approve your changes, they may merge your pull request into the main branch. Be responsive to any comments or suggestions during the review process.

If asked for any changes do push changes and create pull request from your account, changes will be added on current Pull Request and request for Review.

This approach allows you to create a pull request directly from your main branch without the need for a separate feature branch.
