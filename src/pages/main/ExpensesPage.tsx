import React, { useState } from 'react';
import { Plus, Search, Filter, Download, Edit, Trash2, Calendar, DollarSign } from 'lucide-react';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Select from '@/components/common/Select';
import Modal from '@/components/common/Modal';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import { formatCurrency, formatDate } from '@/utils/helpers';

interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  description?: string;
  receiptUrl?: string;
  status: 'pending' | 'approved' | 'rejected';
}

const categories = [
  { value: 'office', label: 'Office Supplies' },
  { value: 'travel', label: 'Travel' },
  { value: 'meals', label: 'Meals & Entertainment' },
  { value: 'utilities', label: 'Utilities' },
  { value: 'rent', label: 'Rent' },
  { value: 'salary', label: 'Salaries' },
  { value: 'equipment', label: 'Equipment' },
  { value: 'other', label: 'Other' },
];

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: '1',
      title: 'Office Rent - January',
      amount: 150000,
      category: 'rent',
      date: '2024-01-15',
      status: 'approved',
    },
    {
      id: '2',
      title: 'Team Lunch',
      amount: 25000,
      category: 'meals',
      date: '2024-01-20',
      status: 'pending',
    },
  ]);
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    description: '',
  });

  const handleAddExpense = () => {
    const newExpense: Expense = {
      id: Date.now().toString(),
      title: formData.title,
      amount: parseFloat(formData.amount),
      category: formData.category,
      date: formData.date,
      description: formData.description,
      status: 'pending',
    };
    
    setExpenses([newExpense, ...expenses]);
    setIsAddModalOpen(false);
    resetForm();
  };

  const handleEditExpense = () => {
    if (!selectedExpense) return;
    
    setExpenses(expenses.map(exp => 
      exp.id === selectedExpense.id 
        ? { ...exp, ...formData, amount: parseFloat(formData.amount) }
        : exp
    ));
    setIsEditModalOpen(false);
    setSelectedExpense(null);
    resetForm();
  };

  const handleDeleteExpense = (id: string) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      setExpenses(expenses.filter(exp => exp.id !== id));
    }
  };

  const openEditModal = (expense: Expense) => {
    setSelectedExpense(expense);
    setFormData({
      title: expense.title,
      amount: expense.amount.toString(),
      category: expense.category,
      date: expense.date,
      description: expense.description || '',
    });
    setIsEditModalOpen(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      amount: '',
      category: '',
      date: new Date().toISOString().split('T')[0],
      description: '',
    });
  };

  const filteredExpenses = expenses.filter(expense => {
    const matchesSearch = expense.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !filterCategory || expense.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const pendingCount = expenses.filter(exp => exp.status === 'pending').length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved': return <Badge variant="success">Approved</Badge>;
      case 'pending': return <Badge variant="warning">Pending</Badge>;
      case 'rejected': return <Badge variant="danger">Rejected</Badge>;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Expenses</h1>
            <p className="text-gray-600 mt-1">Track and manage your business expenses</p>
          </div>
          <Button leftIcon={<Plus className="w-5 h-5" />} onClick={() => setIsAddModalOpen(true)}>
            Add Expense
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-600 text-sm mb-1">Total Expenses</div>
                <div className="text-2xl font-bold text-gray-900">{formatCurrency(totalExpenses)}</div>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-600 text-sm mb-1">Pending Approval</div>
                <div className="text-2xl font-bold text-gray-900">{pendingCount}</div>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-600 text-sm mb-1">This Month</div>
                <div className="text-2xl font-bold text-gray-900">{expenses.length}</div>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Download className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search expenses..."
                leftIcon={<Search className="w-5 h-5" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="w-full sm:w-64">
              <Select
                options={[{ value: '', label: 'All Categories' }, ...categories]}
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                leftIcon={<Filter className="w-5 h-5" />}
              />
            </div>
          </div>
        </Card>

        {/* Expenses List */}
        {filteredExpenses.length === 0 ? (
          <Card>
            <div className="text-center py-12">
              <DollarSign className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {expenses.length === 0 ? 'No Expenses Yet' : 'No matching expenses'}
              </h3>
              <p className="text-gray-600 mb-4">
                {expenses.length === 0 
                  ? 'Start tracking your expenses to manage your taxes better'
                  : 'Try adjusting your search or filters'}
              </p>
              {expenses.length === 0 && (
                <Button onClick={() => setIsAddModalOpen(true)}>
                  Add Your First Expense
                </Button>
              )}
            </div>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredExpenses.map((expense) => (
              <Card key={expense.id} hover>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{expense.title}</h3>
                      {getStatusBadge(expense.status)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(expense.date)}
                      </span>
                      <span className="capitalize">
                        {categories.find(c => c.value === expense.category)?.label}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">
                        {formatCurrency(expense.amount)}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditModal(expense)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteExpense(expense.id)}
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Add Expense Modal */}
        <Modal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          title="Add New Expense"
        >
          <div className="space-y-4">
            <Input
              label="Expense Title"
              placeholder="e.g., Office Supplies"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />

            <Input
              label="Amount (₦)"
              type="number"
              placeholder="0.00"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />

            <Select
              label="Category"
              options={categories}
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />

            <Input
              label="Date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />

            <Input
              label="Description (Optional)"
              placeholder="Additional details..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />

            <div className="flex gap-3 pt-4">
              <Button fullWidth variant="outline" onClick={() => setIsAddModalOpen(false)}>
                Cancel
              </Button>
              <Button fullWidth onClick={handleAddExpense}>
                Add Expense
              </Button>
            </div>
          </div>
        </Modal>

        {/* Edit Expense Modal */}
        <Modal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          title="Edit Expense"
        >
          <div className="space-y-4">
            <Input
              label="Expense Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />

            <Input
              label="Amount (₦)"
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />

            <Select
              label="Category"
              options={categories}
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />

            <Input
              label="Date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />

            <Input
              label="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />

            <div className="flex gap-3 pt-4">
              <Button fullWidth variant="outline" onClick={() => setIsEditModalOpen(false)}>
                Cancel
              </Button>
              <Button fullWidth onClick={handleEditExpense}>
                Save Changes
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
 );
}
