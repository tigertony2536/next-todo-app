import { describe, it, expect, beforeAll, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import LoginForm from "./LoginForm";

//Mock axios for avoiding real api calls
vi.mock("axios");

describe("Test LoginForm component", () => {
	beforeAll(() => {
		global.window.alert = vi.fn();
	});

	it("Can render form component", () => {
		const { getByPlaceholderText, getByText } = render(<LoginForm />);

		expect(getByPlaceholderText(/email/i)).toBeInTheDocument();
		expect(getByPlaceholderText(/password/i)).toBeInTheDocument();
		expect(getByText(/log in/i)).toBeInTheDocument();
		expect(getByText(/sign up/i)).toBeInTheDocument();
	});

	it("Can show error when submit with empty form", async () => {
		const { getByText } = render(<LoginForm />);

		fireEvent.click(getByText(/log in/i));

		await waitFor(() => {
			expect(screen.getByText(/email is required/i)).toBeInTheDocument();
			expect(
				screen.getByText(/password is required/i)
			).toBeInTheDocument();
		});
	});

	it("Can error with invalid email", async () => {
		const { getByText, getByPlaceholderText } = render(<LoginForm />);

		fireEvent.change(getByPlaceholderText(/email/i), {
			target: { value: "tiger@email" },
		});

		fireEvent.click(getByText(/log in/i));

		await waitFor(() => {
			expect(
				screen.getByText(/invalid email address/i)
			).toBeInTheDocument();
			expect(
				screen.getByText(/password is required/i)
			).toBeInTheDocument();
		});
	});
});
